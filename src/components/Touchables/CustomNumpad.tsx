import React, { Fragment, FunctionComponent, useState } from "react";
import { Pressable, Text, View } from "react-native";

import { centerHV, colorGreen, colorWhite, flexRow, flexWrap, fs32SemiGreen1, py, sh16, sh56, sh8, sw40, sw48, sw80 } from "../../styles";
import { CustomSpacer } from "../Views";
import Icon from "react-native-vector-icons/Ionicons";

interface CustomNumpadProps {
  text: string;
  onPress: (text: string) => void;
}

const NUMPAD_ARRAY: (string | number)[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "clear"];

export const CustomNumpad: FunctionComponent<CustomNumpadProps> = ({ text, onPress }) => {
  const [hover, setHover] = useState<number>(-1);

  return (
    <Fragment>
      <CustomSpacer space={sh8} />
      <View
        style={{
          ...centerHV,
          ...flexRow,
          ...flexWrap,
          ...py(sh8),
          backgroundColor: colorWhite._1,
          columnGap: sw48,
          rowGap: sh16,
        }}>
        {NUMPAD_ARRAY.map((eachPad, eachPadIndex) => {
          const handleUpdateText = () => {
            if (eachPad === "clear") {
              onPress("******");
            } else {
              const updatedText = text.replaceAll("*", "").concat(`${eachPad}`);
              if (updatedText.length < 7) {
                const textLength = updatedText.length;
                const updatedValue = `${updatedText}${text.slice(textLength)}`;
                onPress(updatedValue);
              }
            }
          };

          const color = hover === eachPadIndex ? colorGreen._4 : colorGreen._1;

          return (
            <Pressable
              disabled={eachPad === ""}
              key={`${eachPadIndex}${eachPad}`}
              onPress={handleUpdateText}
              onPressIn={() => setHover(eachPadIndex)}
              onPressOut={() => setHover(-1)}
              style={{
                ...centerHV,
                height: sh56,
                width: sw80,
              }}>
              {eachPad === "clear" && <Icon color={color} name="checkmark" size={sw40} />}
              {eachPad !== "clear" && <Text style={{ ...fs32SemiGreen1, color: color }}>{eachPad}</Text>}
            </Pressable>
          );
        })}
      </View>
    </Fragment>
  );
};
