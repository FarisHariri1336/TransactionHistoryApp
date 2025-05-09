declare type PrivateStackParamList = {
  TransactionList: undefined;
  TransactionDetail: { transaction: Transaction };
};

declare type TransactionDetailScreenProps = StackScreenProps<PrivateStackParamList, "TransactionList">;
declare type TransactionListScreenProps = StackScreenProps<PrivateStackParamList, "TransactionDetail">;
