import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { CustomSpacer } from "../Views";
import Clipboard from "@react-native-clipboard/clipboard";
import Toast from "react-native-toast-message";
import { IconButton } from "../Touchables";
import { colorGreen } from "../../styles";

interface Props {
  label: string;
  value: string;
  isCopyable?: boolean;
}

export const TransactionDetailRow: React.FC<Props> = ({ label, value, isCopyable }) => {
  const handleCopy = async () => {
    await Clipboard.setString(value);
    Toast.show({ type: "success", text1: "Copied Successfully", position: "bottom" });
  };

  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>

      <CustomSpacer space={8} />
      <View style={styles.labelRow}>
        <Text style={styles.value}>{value}</Text>
        <CustomSpacer space={8} isHorizontal />
        {isCopyable && <IconButton onPress={handleCopy} name="copy" color={colorGreen._1} />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginVertical: 12,
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    color: "#888",
    fontSize: 12,
  },
  icon: {
    marginLeft: 6,
  },
  value: {
    color: "#111",
    fontSize: 14,
    fontWeight: "500",
  },
});
