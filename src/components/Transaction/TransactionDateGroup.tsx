import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface TransactionDateGroupProps {
  date: string;
  children: React.ReactNode;
}

export const TransactionDateGroup: React.FC<TransactionDateGroupProps> = ({ date, children }) => {
  return (
    <View style={styles.groupContainer}>
      <Text style={styles.monthHeader}>{date}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  groupContainer: {
    marginTop: 24,
  },
  monthHeader: {
    color: "#AAA",
    fontSize: 15,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 12,
    marginLeft: 4,
  },
});
