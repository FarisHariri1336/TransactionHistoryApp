import React, { FC, useCallback, useMemo, useState } from "react";
import { SectionList, RefreshControl, View, Text, StyleSheet } from "react-native";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { TransactionCard, CustomHeader, SafeAreaPage, MonthFilterTabs } from "../components";
import { transactions } from "../utils/mockData";
import { groupTransactionsByMonthAndDate, TransactionMonthSection } from "../utils/groupTransactions";
import { colorGray, colorGreen, flexChild, flexGrow, fsAlignCenter, px, sw16, sw24 } from "../styles";
import { Language } from "../constants";

const { TRANSACTION_LIST } = Language.PAGE;
export const TransactionListScreen: FC<TransactionListScreenProps> = () => {
  const navigation = useNavigation();
  const { logout } = useAuth();

  const [refreshing, setRefreshing] = useState(false);
  const allSections = useMemo(() => groupTransactionsByMonthAndDate(transactions), []);
  const monthOptions = allSections.map((s) => s.title);
  const [selectedMonth, setSelectedMonth] = useState(monthOptions[0]);

  const filteredSections = useMemo(() => allSections.filter((s) => s.title === selectedMonth), [selectedMonth, allSections]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  const handleLogout = () => {
    logout();
  };

  const renderItem = ({ item }: { item: TransactionMonthSection["data"][number] }) => (
    <View>
      <Text style={styles.dateLabel}>{item.dateLabel}</Text>
      {item.transactions.map((tx) => (
        <TransactionCard
          key={tx.id.toString()}
          transaction={tx}
          onPress={() => navigation.navigate("TransactionDetail", { transaction: tx })}
        />
      ))}
    </View>
  );

  const renderSectionHeader = ({ section }: { section: { title: string } }) => <Text style={styles.sectionHeader}>{section.title}</Text>;

  return (
    <SafeAreaPage bottomSpace={24}>
      <CustomHeader
        leftIcon={{
          color: colorGreen._1,
          name: "chevron-back-outline",
          onPress: handleLogout,
          size: sw24,
        }}
      />
      <SectionList
        sections={filteredSections}
        keyExtractor={(item) => item.dateLabel}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={colorGreen._1} />}
        ListEmptyComponent={<Text style={styles.emptyText}>{TRANSACTION_LIST.NO_DATA}</Text>}
        ListHeaderComponent={<MonthFilterTabs months={monthOptions} selectedMonth={selectedMonth} onSelect={setSelectedMonth} />}
        contentContainerStyle={styles.container}
      />
    </SafeAreaPage>
  );
};

const styles = StyleSheet.create({
  container: {
    ...px(sw16),
    ...flexGrow,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 4,
  },
  dateLabel: {
    fontSize: 12,
    color: colorGray._4,
    marginVertical: 4,
    marginLeft: 16,
  },
  emptyText: {
    color: "#999",
    ...fsAlignCenter,
    marginTop: 40,
    fontSize: 14,
  },
});
