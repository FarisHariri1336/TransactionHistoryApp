import React, { Fragment, FunctionComponent } from "react";
import { Pressable, Text, TextStyle, View, ViewStyle } from "react-native";
import { ImageStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LocalAssets } from "../../assets/images/LocalAssets";
import {
  absolutePosition,
  centerVertical,
  colorBlack,
  colorGray,
  colorWhite,
  flexChild,
  fs16RegGray9,
  fs24SemiBoldGreen3,
  fsAlignCenter,
  fullHW,
  fullWidth,
  px,
  sh16,
  sh198,
  sh24,
  sh4,
  sh8,
  sw220,
  sw24,
  sw342,
  sw36,
  sw4,
  sw8,
} from "../../styles";
import { CustomImage } from "../Images";
import { LinkText, RoundedButton } from "../Touchables";
import { CustomSpacer } from "../Views";

interface BottomSliderPageProps {
  containerStyle?: ViewStyle;
  customRender?: JSX.Element;
  image?: number;
  imageStyle?: ImageStyle;
  onDismiss: () => void;
  primaryButton?: BaseTouchable;
  secondaryButton?: BaseTouchable;
  show: boolean;
  subtitle?: string;
  title?: string;
  titleStyle?: TextStyle;
}

export const BottomSliderPage: FunctionComponent<BottomSliderPageProps> = ({
  containerStyle,
  customRender,
  image,
  imageStyle,
  onDismiss,
  primaryButton,
  secondaryButton,
  show,
  subtitle,
  title,
  titleStyle,
}) => {
  const { bottom } = useSafeAreaInsets();

  const handleSecondaryButton = () => {
    if (secondaryButton) {
      secondaryButton.onPress();
    }
    onDismiss();
  };

  const containerView: ViewStyle = {
    ...centerVertical,
    ...px(sw24),
    backgroundColor: colorWhite._1,
    borderTopLeftRadius: sw8,
    borderTopRightRadius: sw8,
    ...containerStyle,
  };

  return (
    <Fragment>
      {show === true ? (
        <View
          style={{
            ...fullHW,
            ...flexChild,
            ...absolutePosition,
            backgroundColor: colorBlack._1_4,
          }}>
          <Pressable onPress={onDismiss} style={flexChild} />

          <View style={containerView}>
            <View style={centerVertical}>
              <CustomSpacer space={sh8} />
              <View style={{ backgroundColor: colorGray._10, borderRadius: sw4, height: sh4, width: sw36 }} />
              <CustomSpacer space={sh8} />
            </View>

            <CustomSpacer space={sh8} />
            <CustomImage
              source={image !== undefined ? image : LocalAssets.illustration.biometric}
              style={{ width: sw220, height: sh198, ...imageStyle }}
            />
            <CustomSpacer space={sh24} />
            <Text style={{ ...fs24SemiBoldGreen3, ...titleStyle }}>{title}</Text>
            <CustomSpacer space={sh8} />
            <Text style={{ width: sw342, ...fsAlignCenter, ...fs16RegGray9 }}>{subtitle}</Text>
            {customRender && (
              <Fragment>
                <CustomSpacer space={sh8} />
                {customRender}
              </Fragment>
            )}
            <CustomSpacer space={sh24} />
            {primaryButton && (
              <Fragment>
                <RoundedButton buttonStyle={fullWidth} onPress={primaryButton.onPress} text={primaryButton.title} />
                <CustomSpacer space={sh16} />
              </Fragment>
            )}
            {secondaryButton && (
              <Fragment>
                <LinkText onPress={handleSecondaryButton} text={secondaryButton.title} />
                <CustomSpacer space={sh16} />
              </Fragment>
            )}
            <CustomSpacer space={bottom} />
          </View>
        </View>
      ) : null}
    </Fragment>
  );
};
