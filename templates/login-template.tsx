import {
  sh8,
  sh10,
  sh20,
  sh24,
  sh40,
  sh64,
  sh80,
  sh162,
  sw10,
  sw16,
  sw24,
  px,
  py,
  fsAlignCenter,
  fs20SemiBoldGreen3,
  centerHV,
  alignItemsCenter,
  sh16,
  sh12,
  sh18,
  flexChild,
  flexRowCC,
  colorGray,
  colorWhite,
  colorGreen,
  colorRed,
} from "../src/styles";
import { CustomHeader, CustomImage, CustomNumpad, CustomFlexSpacer, LinkText, Pin, SafeAreaPage, CustomSpacer } from "../src/components";
// import {LOCAL_ASSETS} from '@regov-enterprise/ui-components';
import React, { Fragment, FunctionComponent, ReactNode } from "react";
import { Text, View } from "react-native";

import { LocalAssets } from "../src/assets/images/LocalAssets";

interface LoginTemplateProps {
  error?: string;
  handleForgotPassword?: () => void;
  headerLeftIcon?: BaseIcoMoon;
  label: string;
  numberOfAttempt?: number;
  pinArray: string[];
  pinValue: string;
  setPinValue: (text: string) => void;
}

export const LoginTemplate: FunctionComponent<LoginTemplateProps> = ({
  error,
  handleForgotPassword,
  headerLeftIcon,
  label,
  numberOfAttempt,
  pinArray,
  pinValue,
  setPinValue,
}) => {
  return (
    <SafeAreaPage bottomSpace={sh24} topBackgroundColor={colorGray._1} bottomBackgroundColor={colorWhite._1}>
      {headerLeftIcon ? (
        <CustomHeader customStyle={{ backgroundColor: colorGray._1 }} leftIcon={headerLeftIcon} />
      ) : (
        <View style={{ backgroundColor: colorGray._1 }}>
          <CustomSpacer space={sh80} />
        </View>
      )}
      <View style={{ ...flexChild, backgroundColor: colorGray._1, ...px(sw24) }}>
        <Fragment>
          <View style={centerHV}>
            <CustomImage source={LocalAssets.illustration.myBidLogo} style={{ width: sh162, height: sh64 }} />
          </View>
          <CustomSpacer space={sh40} />
          <Text style={{ ...fs20SemiBoldGreen3, color: colorGreen._1, ...fsAlignCenter, fontWeight: "600" }}>{label}</Text>
          <CustomSpacer space={sh40} />
          <View style={centerHV}>
            <Pin pin={pinArray} />
          </View>

          {!numberOfAttempt && error && (
            <View>
              <CustomSpacer space={sh24} />
              <View style={alignItemsCenter}>
                <View
                  style={{
                    ...flexRowCC,
                    ...px(sw16),
                    ...py(sh10),
                    borderRadius: sw10,
                  }}>
                  <CustomSpacer space={sh8} isHorizontal={true} />
                  <Text style={{ fontSize: sh12, lineHeight: sh18, fontWeight: 400, color: "red" }}>{error}</Text>
                </View>
              </View>
              <CustomSpacer space={sh24} />
            </View>
          )}

          {handleForgotPassword && (
            <View style={centerHV}>
              {(numberOfAttempt && error) || !error ? <CustomSpacer space={sh40} /> : null}
              <LinkText
                onPress={handleForgotPassword}
                style={{ fontSize: sh16, lineHeight: sh20, fontWeight: 600, color: colorGreen._1 }}
                text={"Forgot PIN"}
                withUnderline
              />
            </View>
          )}
        </Fragment>

        <CustomFlexSpacer />
        {numberOfAttempt && numberOfAttempt < 3 ? (
          <View>
            <CustomFlexSpacer />
            <View style={alignItemsCenter}>
              <View
                style={{
                  ...flexRowCC,
                  ...px(sw16),
                  ...py(sh10),
                  borderRadius: sw10,
                }}>
                <CustomSpacer space={sh8} isHorizontal={true} />
                <Text
                  style={{
                    fontSize: sh12,
                    fontWeight: 400,
                    color: colorRed._1,
                    lineHeight: sh20,
                  }}>
                  {error}
                </Text>
              </View>
            </View>
            <CustomSpacer space={sh20} />
          </View>
        ) : null}
      </View>
      <CustomNumpad text={pinValue} onPress={setPinValue} />
    </SafeAreaPage>
  );
};
