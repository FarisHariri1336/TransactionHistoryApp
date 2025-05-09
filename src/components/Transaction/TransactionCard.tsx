import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import ReactNativeBiometrics from "react-native-biometrics";
import { Transaction } from "../../types/transaction";
import { alignItemsCenter, colorGreen, flexChild, flexRow, rowCenterVertical } from "../../styles";

interface TransactionCardProps {
  transaction: Transaction;
  onPress: () => void;
}

export const TransactionCard: React.FC<TransactionCardProps> = ({ transaction, onPress }) => {
  const { name, time, amount, type } = transaction;
  const isCredit = type === "credit";
  const iconName = isCredit ? "arrow-forward-outline" : "arrow-back-outline";
  const iconColor = isCredit ? "#00877D" : "#D64545";

  const [revealed, setRevealed] = useState(false);

  const handleToggleVisibility = async () => {
    const rnBiometrics = new ReactNativeBiometrics();
    const { success } = await rnBiometrics.simplePrompt({ promptMessage: "Authenticate to reveal amount" });
    if (success) setRevealed(true);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Ionicons name={iconName} size={20} color={iconColor} style={styles.icon} />
      <View style={styles.details}>
        <Text style={styles.name}>{name.length > 20 ? `${name.substring(0, 20)}...` : name}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <TouchableOpacity onPress={handleToggleVisibility} style={styles.amountContainer}>
        <Text style={[styles.amount, { color: iconColor }]}>{revealed ? `${isCredit ? "+" : "-"}RM ${amount}` : "*****"}</Text>
        <Ionicons name={revealed ? "eye" : "eye-off"} size={24} color={iconColor} style={styles.eyeIcon} />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colorGreen._15,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    ...flexRow,
    ...alignItemsCenter,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
  },
  details: {
    ...flexChild,
  },
  name: {
    color: "#111111",
    fontWeight: "bold",
    fontSize: 14,
  },
  time: {
    color: "#666666",
    fontSize: 12,
    marginTop: 2,
  },
  amountContainer: {
    ...rowCenterVertical,
  },
  eyeIcon: {
    marginLeft: 6,
  },
  amount: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
