import React, { FC, useState } from "react";
import { View, Text } from "react-native";
import { TransactionDetailRow } from "../components/Transaction/TransactionDetailRow";
import { TransactionActionButton } from "../components/Transaction/TransactionActionButton";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BasicModal, BottomSliderPage, CustomHeader, CustomSpacer } from "../components";
import {
  colorGray,
  colorGreen,
  colorRed,
  colorWhite,
  flexChild,
  justifyContentEnd,
  noMargin,
  px,
  py,
  rowCenterVertical,
  sh16,
  sh24,
  spaceBetweenHorizontal,
  sw24,
} from "../styles";
import { Language } from "../constants";
import Icon from "react-native-vector-icons/Ionicons";
import { LocalAssets } from "../assets/images/LocalAssets";
const { PAGE, BOTTOM_SLIDER } = Language;
const { TRANSACTION_DETAIL } = PAGE;
const { COMING_SOON } = BOTTOM_SLIDER;

export const TransactionDetailScreen: FC<TransactionDetailScreenProps> = ({ route }) => {
  const navigation = useNavigation();
  const { transaction } = route.params;

  const [sliderVisible, setSliderVisible] = useState(false);
  const showComingSoon = () => setSliderVisible(true);
  const hideSlider = () => setSliderVisible(false);

  const isCredit = transaction.type === "credit";
  const iconName = isCredit ? "arrow-forward-outline" : "arrow-back-outline";
  const iconColor = isCredit ? colorGreen._11 : colorRed._1;

  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <>
      <SafeAreaView style={flexChild}>
        <CustomHeader
          leftIcon={{
            color: colorGreen._1,
            name: "chevron-back-outline",
            onPress: handleGoBack,
            size: sw24,
          }}
        />
        <View
          style={{
            backgroundColor: colorWhite._1,
            ...flexChild,
            ...px(20),
            ...py(20),
          }}>
          <View style={{ ...spaceBetweenHorizontal, ...rowCenterVertical }}>
            <Text style={{ fontSize: 28, fontWeight: "bold", color: iconColor }}>
              {isCredit ? `+ RM ${transaction.amount}` : `- RM ${transaction.amount}`}
            </Text>
            <Icon name={iconName} size={28} color={iconColor} />
          </View>
          <CustomSpacer space={50} />

          <Text style={{ color: colorGray._9 }}>
            {TRANSACTION_DETAIL.MONEY_TRANSFER}
            <Text style={{ fontWeight: "bold" }}>{transaction.name}</Text> is{" "}
            <Text style={{ color: colorGreen._11 }}>{transaction.status}</Text>
          </Text>
          <CustomSpacer space={sh24} />

          <TransactionDetailRow label={TRANSACTION_DETAIL.RECIPIENT_REFERENCE} value={transaction.reference} />
          <TransactionDetailRow label={TRANSACTION_DETAIL.TRANSACTION_ID} value={transaction.transactionId} isCopyable={true} />
          <CustomSpacer space={sh16} />

          <TransactionActionButton text={TRANSACTION_DETAIL.REPORT} onPress={showComingSoon} />
          <TransactionActionButton text={TRANSACTION_DETAIL.SHARE} onPress={showComingSoon} />
        </View>
      </SafeAreaView>
      <BasicModal
        visible={sliderVisible}
        onClose={hideSlider}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.6}
        hasBackdrop
        style={{ ...justifyContentEnd, ...noMargin }}>
        <BottomSliderPage
          onDismiss={hideSlider}
          primaryButton={{ onPress: hideSlider, title: COMING_SOON.LABEL_TRY_AGAIN }}
          show={true}
          subtitle={COMING_SOON.SUBHEADING}
          title={COMING_SOON.HEADING}
          image={LocalAssets.illustration.comingSoon}
        />
      </BasicModal>
    </>
  );
};
