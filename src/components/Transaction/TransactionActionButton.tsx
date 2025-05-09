import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface TransactionActionButtonProps {
  text: string;
  onPress: () => void;
}

export const TransactionActionButton: React.FC<TransactionActionButtonProps> = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.label}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#2B273F",
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12,
  },
  label: {
    color: "#FFF",
    fontSize: 16,
  },
});
