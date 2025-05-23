import debounce from "lodash.debounce";
import React, { Fragment, FunctionComponent, useCallback, useState } from "react";
import { Pressable, Text, TextStyle, ViewStyle } from "react-native";
import { CircleSnail } from "react-native-progress";

import {
  border,
  colorGray,
  colorGreen,
  colorTransparent,
  colorWhite,
  flexRowCC,
  fs16BoldWhite1,
  fsCapitalize,
  sh16,
  sh52,
  sw1,
  sw2,
  sw20,
  sw240,
  sw8,
} from "../../styles";
import { CustomSpacer } from "../Views/Spacer";
import Icon from "react-native-vector-icons/Ionicons";

export interface CustomButtonProps {
  buttonStyle?: ViewStyle;
  disabled?: boolean;
  icon?: string;
  iconColor?: string;
  iconSize?: number;
  loading?: boolean;
  onPress: () => void;
  secondary?: boolean;
  text: string;
  textStyle?: TextStyle;
  withDebounce?: boolean;
}

export const CustomButton: FunctionComponent<CustomButtonProps> = ({
  buttonStyle,
  disabled,
  icon,
  iconColor,
  iconSize,
  loading,
  onPress,
  secondary,
  text,
  textStyle,
  withDebounce,
}: CustomButtonProps) => {
  const [hover, setHover] = useState<boolean>(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncePress = useCallback(
    debounce(onPress, 1000, {
      leading: true,
      trailing: false,
    }),
    [onPress],
  );

  const disabledColor = disabled ? colorGreen._6 : colorGreen._1;
  const color = ((hover === true && secondary !== true) || loading === true) && disabled !== true ? colorGreen._4 : disabledColor;

  const defaultButtonStyle: ViewStyle = {
    ...border(color, sw1),
    ...flexRowCC,
    backgroundColor: secondary ? colorTransparent : color,
    height: sh52,
    width: sw240,
    ...buttonStyle,
  };

  const defaultIconColor = iconColor !== undefined ? iconColor : colorWhite._1;
  const textColor = secondary ? colorGray._6 : colorWhite._1;

  const handlePress = () => {
    if (withDebounce === true) {
      debouncePress();
    } else {
      onPress();
    }
  };

  return (
    <Pressable
      onPress={disabled === true ? undefined : handlePress}
      onPressIn={() => setHover(true)}
      onPressOut={() => setHover(false)}
      style={defaultButtonStyle}>
      {loading === true ? (
        <Fragment>
          <CircleSnail color={colorWhite._1} size={sw20} thickness={sw2} />
          <CustomSpacer isHorizontal={true} space={sw8} />
        </Fragment>
      ) : null}
      {icon === undefined ? null : (
        <Fragment>
          <Icon color={defaultIconColor} name={icon} size={iconSize || sh16} />
          <CustomSpacer isHorizontal={true} space={sw8} />
        </Fragment>
      )}
      <Text style={{ ...fs16BoldWhite1, ...fsCapitalize, color: textColor, ...textStyle }}>{text}</Text>
    </Pressable>
  );
};
