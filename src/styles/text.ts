import { TextStyle } from "react-native";
import { PoppinsBold, PoppinsMedium, PoppinsRegular, PoppinsSemiBold } from "../constants";
import { colorBlack, colorBlue, colorGray, colorGreen, colorRed, colorWhite } from "./colors";
import { scaleHeight } from "./scaler";
import { sh10, sh12, sh14, sh16, sh18, sh20, sh24, sh32, sh36, sh40, sh48, sh8 } from "./sizes";

export const fsAlignCenter: TextStyle = { textAlign: "center" };
export const fsAlignLeft: TextStyle = { textAlign: "left" };
export const fsAlignRight: TextStyle = { textAlign: "right" };

export const fsCapitalize: TextStyle = {
  textTransform: "capitalize",
};

export const fsNoLineHeight: TextStyle = {
  lineHeight: undefined,
};

export const fsTransformNone: TextStyle = {
  textTransform: "none",
};

export const fsUnderline: TextStyle = {
  textDecorationLine: "underline",
};

export const fsUppercase: TextStyle = {
  textTransform: "uppercase",
};

export const fsBullet = "\u2022";
export const fsDoubleQuote = "\u201D";

export const fs18RegWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh8,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(8 * 1.6),
};

export const fs10BoldWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh10,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(10 * 1.6),
};

export const fs10RegBlack2: TextStyle = {
  color: colorBlack._2,
  fontSize: sh10,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(10 * 1.6),
};

export const fs12BoldBlack2: TextStyle = {
  color: colorBlack._2,
  fontSize: sh12,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12BoldGray6: TextStyle = {
  color: colorGray._6,
  fontSize: sh12,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12BoldGreen1: TextStyle = {
  color: colorGreen._1,
  fontSize: sh12,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12BoldWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh12,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12RegBlack2: TextStyle = {
  color: colorBlack._2,
  fontSize: sh12,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12RegRed1: TextStyle = {
  color: colorRed._1,
  fontSize: sh12,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12RegGray6: TextStyle = {
  color: colorGray._6,
  fontSize: sh12,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12RegGray8: TextStyle = {
  color: colorGray._8,
  fontSize: sh12,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12RegGray9: TextStyle = {
  color: colorGray._9,
  fontSize: sh12,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12RegGray11: TextStyle = {
  color: colorGray._11,
  fontSize: sh12,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12RegWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh12,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12RegGreen3: TextStyle = {
  color: colorGreen._3,
  fontSize: sh12,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12SemiBoldGray6: TextStyle = {
  color: colorGray._6,
  fontSize: sh12,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs12MedBlack3: TextStyle = {
  color: colorBlack._3,
  fontSize: sh12,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(12 * 1.3),
};

export const fs14MedBlack3: TextStyle = {
  color: colorBlack._3,
  fontSize: sh14,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14MedWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh14,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14MedWhite4: TextStyle = {
  color: colorWhite._4,
  fontSize: sh14,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14SemiBoldBlack3: TextStyle = {
  color: colorBlack._3,
  fontSize: sh14,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14BoldBlack2: TextStyle = {
  color: colorBlack._2,
  fontSize: sh14,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14RegWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh14,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14RegBlack1: TextStyle = {
  color: colorBlack._1,
  fontSize: sh14,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14RegBlack3: TextStyle = {
  color: colorBlack._3,
  fontSize: sh14,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14RegGray5: TextStyle = {
  color: colorGray._5,
  fontSize: sh14,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14RegRed1: TextStyle = {
  color: colorRed._1,
  fontSize: sh14,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14RegGray8: TextStyle = {
  color: colorGray._8,
  fontSize: sh14,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14RegGray9: TextStyle = {
  color: colorGray._9,
  fontSize: sh14,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14MedGray9: TextStyle = {
  color: colorGray._9,
  fontSize: sh14,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14MedGreen1: TextStyle = {
  color: colorGreen._1,
  fontSize: sh14,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14RegGreen1: TextStyle = {
  color: colorGreen._1,
  fontSize: sh14,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14RegGreen3: TextStyle = {
  color: colorGreen._3,
  fontSize: sh14,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs14RegGreen4: TextStyle = {
  color: colorGreen._4,
  fontSize: sh14,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(14 * 1.3),
};

export const fs16RegWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh16,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16RegGreen3: TextStyle = {
  color: colorGreen._3,
  fontSize: sh16,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16BoldBlack2: TextStyle = {
  color: colorBlack._2,
  fontSize: sh16,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16MedWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh16,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16MedWhite4: TextStyle = {
  color: colorWhite._4,
  fontSize: sh16,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16BoldWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh16,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16MedBlack1: TextStyle = {
  color: colorBlack._1,
  fontSize: sh16,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(16 * 1.25),
};

export const fs16MedBlack3: TextStyle = {
  color: colorBlack._3,
  fontSize: sh16,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(16 * 1.25),
};

export const fs16MedGreen1: TextStyle = {
  color: colorGreen._1,
  fontSize: sh16,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(16 * 1.25),
};

export const fs16MedGreen3: TextStyle = {
  color: colorGreen._3,
  fontSize: sh16,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(16 * 1.25),
};

export const fs16MedGreen5: TextStyle = {
  color: colorGreen._5,
  fontSize: sh16,
  fontFamily: PoppinsMedium,
  lineHeight: scaleHeight(16 * 1.25),
};

export const fs16RegBlack1: TextStyle = {
  color: colorBlack._1,
  fontSize: sh16,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16RegGray6: TextStyle = {
  color: colorGray._6,
  fontSize: sh16,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16RegGray9: TextStyle = {
  color: colorGray._9,
  fontSize: sh16,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16RegGray11: TextStyle = {
  color: colorGray._11,
  fontSize: sh16,
  fontFamily: PoppinsRegular,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16SemiBoldBlue2: TextStyle = {
  color: colorBlue._2,
  fontSize: sh16,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16SemiBoldWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh16,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16SemiBoldWhite4: TextStyle = {
  color: colorWhite._4,
  fontSize: sh16,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16SemiBoldGreen1: TextStyle = {
  color: colorGreen._1,
  fontSize: sh16,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16SemiBoldGreen2: TextStyle = {
  color: colorGreen._2,
  fontSize: sh16,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16SemiBoldGreen6: TextStyle = {
  color: colorGreen._6,
  fontSize: sh16,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs16SemiBoldGreen3: TextStyle = {
  color: colorGreen._3,
  fontSize: sh16,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(16 * 1.48),
};

export const fs18SemiBoldGreen3: TextStyle = {
  color: colorGreen._3,
  fontSize: sh18,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(18 * 1.48),
};

export const fs18SemiBoldBlack3: TextStyle = {
  color: colorBlack._3,
  fontSize: sh18,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(18 * 1.48),
};

export const fs18BoldGray6: TextStyle = {
  color: colorGray._6,
  fontSize: sh18,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(18 * 1.35),
};

export const fs20BoldBlack2: TextStyle = {
  color: colorBlack._2,
  fontSize: sh20,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(20 * 1.4),
};

export const fs20SemiBoldGreen3: TextStyle = {
  color: colorGreen._3,
  fontSize: sh20,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(20 * 1.4),
};

export const fs24BoldBlack2: TextStyle = {
  color: colorBlack._2,
  fontSize: sh24,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(24 * 1.35),
};

export const fs24BoldGray6: TextStyle = {
  color: colorGray._6,
  fontSize: sh24,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(24 * 1.35),
};

export const fs24SemiBoldGreen3: TextStyle = {
  color: colorGreen._3,
  fontSize: sh24,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(24 * 1.35),
};

export const fs24SemiBoldBlack7: TextStyle = {
  color: colorBlack._7,
  fontSize: sh24,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(24 * 1.35),
};

export const fs32BoldWhite1: TextStyle = {
  color: colorWhite._1,
  fontSize: sh32,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(36 * 1.22),
};

export const fs32SemiGreen1: TextStyle = {
  color: colorGreen._1,
  fontSize: sh32,
  fontFamily: PoppinsSemiBold,
  lineHeight: scaleHeight(36 * 1.22),
};

export const fs36BoldBlack2: TextStyle = {
  color: colorBlack._2,
  fontSize: sh36,
  fontFamily: PoppinsBold,
  lineHeight: scaleHeight(36 * 1.22),
};

export const fs40BoldGray6: TextStyle = {
  color: colorGray._6,
  fontSize: sh40,
  fontFamily: PoppinsBold,
  lineHeight: sh48,
};
