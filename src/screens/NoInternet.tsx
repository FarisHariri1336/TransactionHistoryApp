import React, { FC, Fragment, FunctionComponent } from "react";
import { Text, View, ImageSourcePropType } from "react-native";

import { LocalAssets } from "../assets/images/LocalAssets";
import { CustomImage, CustomSpacer, LinkText, RoundedButton, SafeAreaPage } from "../components";
import { Language } from "../constants/language";
import {
  centerHV,
  flexChild,
  fs16RegGray9,
  fs16SemiBoldGreen1,
  fs24SemiBoldBlack7,
  fsAlignCenter,
  fullWidth,
  px,
  sh16,
  sh196,
  sh24,
  sh8,
  sw218,
  sw24,
} from "../styles";

const { NO_INTERNET } = Language.PAGE;

interface NoInternetProps {
  heading?: string;
  illustration?: number | ImageSourcePropType | undefined;
  labelCancel?: string;
  labelTryAgain?: string;
  onPressCancel?: () => void;
  onPressTryAgain: () => void;
  subheading?: string;
}

export const NoInternet: FC<NoInternetProps> = ({
  heading,
  illustration,
  labelCancel,
  labelTryAgain,
  onPressCancel,
  onPressTryAgain,
  subheading,
}) => {
  return (
    <SafeAreaPage>
      <View style={{ ...centerHV, ...flexChild, ...px(sw24) }}>
        <CustomImage source={illustration || LocalAssets.illustration.noInternet} style={{ width: sw218, height: sh196 }} />
        <CustomSpacer space={sh24} />
        <Text style={{ ...fs24SemiBoldBlack7, ...fsAlignCenter }}>{heading || NO_INTERNET.HEADING}</Text>
        <CustomSpacer space={sh8} />
        <Text style={{ ...fs16RegGray9, ...fsAlignCenter }}>{subheading || NO_INTERNET.SUBHEADING}</Text>
        <CustomSpacer space={sh24} />
        <RoundedButton
          buttonStyle={fullWidth}
          onPress={onPressTryAgain}
          text={labelTryAgain || NO_INTERNET.LABEL_TRY_AGAIN}
          withDebounce={true}
        />
        {onPressCancel && (
          <Fragment>
            <CustomSpacer space={sh16} />
            <LinkText onPress={onPressCancel} text={labelCancel || NO_INTERNET.LABEL_CANCEL} style={fs16SemiBoldGreen1} />
          </Fragment>
        )}
      </View>
    </SafeAreaPage>
  );
};
