import React, { FC, RefObject, useRef, useState } from "react";
import { View, Text, Alert } from "react-native";
import { authenticateBiometric } from "../utils/biometrics";
import PagerView from "react-native-pager-view";
import { LocalAssets } from "../assets/images/LocalAssets";
import { SafeAreaPage, CustomImage, CustomSpacer, RoundedButton } from "../components";
import {
  sh24,
  flexChild,
  spaceBetweenHorizontal,
  sh484,
  centerHV,
  fullHW,
  px,
  sw24,
  fs20SemiBoldGreen3,
  fsAlignCenter,
  sh20,
  sw218,
  sh196,
  flexRow,
  sw8,
  sh4,
  colorGreen,
  colorGray,
  sh28,
  centerVertical,
  fullWidth,
  fs16SemiBoldWhite4,
  sh16,
  fs16SemiBoldGreen1,
} from "../styles";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";

import { Language } from "../constants";

const { LOGIN } = Language.PAGE;

export const LoginScreen: FC<LoginPinScreenProps> = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const pageViewRef: RefObject<PagerView> | null = useRef(null);
  const navigation = useNavigation();
  const { login } = useAuth();

  const handleBiometric = async () => {
    const success = await authenticateBiometric();
    if (success) {
      login();
    } else {
      Alert.alert("Biometric authentication failed");
    }
  };
  const handlePassword = () => {
    navigation.navigate("LoginPin");
  };

  return (
    <SafeAreaPage bottomSpace={sh24}>
      <View style={{ ...flexChild, ...spaceBetweenHorizontal }}>
        <PagerView onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)} ref={pageViewRef} initialPage={0} style={flexChild}>
          <View key="1" style={flexChild}>
            <View style={{ ...flexChild, maxHeight: sh484, ...centerHV }}>
              <CustomImage source={LocalAssets.illustration.onboarding} style={fullHW} />
            </View>
            <View style={{ ...px(sw24), ...centerHV }}>
              <Text style={{ ...fs20SemiBoldGreen3, ...fsAlignCenter }}>{LOGIN.HEADING_1}</Text>
              <CustomSpacer space={sh20} />
            </View>
          </View>
          <View key="2" style={flexChild}>
            <View style={{ ...flexChild, maxHeight: sh484, ...centerHV }}>
              <CustomImage source={LocalAssets.illustration.biometric} style={{ width: sw218, height: sh196 }} />
            </View>
            <View style={{ ...px(sw24), ...centerHV }}>
              <Text style={{ ...fs20SemiBoldGreen3, ...fsAlignCenter }}>{LOGIN.HEADING_2}</Text>
              <CustomSpacer space={sh20} />
            </View>
          </View>
        </PagerView>
        <View style={px(sw24)}>
          <View style={{ ...centerHV, ...flexRow, gap: sw8 }}>
            {Array.from({ length: 2 }, (_, i) => (
              <View
                key={i}
                style={{ height: sh4, width: sw24, backgroundColor: currentPage === i ? colorGreen._2 : colorGray._2, borderRadius: sw8 }}
              />
            ))}
          </View>
          <CustomSpacer space={sh28} />
          <View style={centerVertical}>
            <RoundedButton
              buttonStyle={fullWidth}
              disabled={false}
              onPress={() => handleBiometric()}
              text={LOGIN.LOGIN_BIOM_BTN}
              textStyle={fs16SemiBoldWhite4}
              withDebounce={true}
            />
            <CustomSpacer space={sh16} />
            <RoundedButton
              buttonStyle={fullWidth}
              disabled={false}
              onPress={() => handlePassword()}
              text={LOGIN.LOGIN_PIN_BTN}
              textStyle={fs16SemiBoldGreen1}
              withDebounce={true}
              secondary={true}
            />
            <CustomSpacer space={sh20} />
          </View>
        </View>
      </View>
    </SafeAreaPage>
  );
};
