import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { colorGray, colorGreen, colorWhite, flexRow } from "../../styles";

interface MonthFilterTabsProps {
  months: string[];
  selectedMonth: string;
  onSelect: (month: string) => void;
}

export const MonthFilterTabs: React.FC<MonthFilterTabsProps> = ({ months, selectedMonth, onSelect }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.container}>
      {months.map((month) => (
        <TouchableOpacity key={month} style={[styles.tab, selectedMonth === month && styles.selectedTab]} onPress={() => onSelect(month)}>
          <Text style={[styles.tabText, selectedMonth === month && styles.selectedTabText]}>{month}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...flexRow,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  tab: {
    backgroundColor: colorGray._12,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 8,
  },
  selectedTab: {
    backgroundColor: colorGreen._1,
  },
  tabText: {
    fontWeight: "600",
  },
  selectedTabText: {
    color: colorWhite._1,
  },
});
