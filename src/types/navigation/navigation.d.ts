import { Transaction } from "src/types/transaction.d.ts";

import { NavigatorScreenParams } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";

declare type RootStackParamList = {
  Public: NavigatorScreenParams<PublicStackParamList>;
  Private: NavigatorScreenParams<PrivateStackParamList>;
};

declare type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;
declare type PublicScreenProps<T extends keyof PublicStackParamList = keyof PublicStackParamList> = StackScreenProps<
  PublicStackParamList,
  T
>;
declare type PrivateScreenProps<T extends keyof PrivateStackParamList = keyof PrivateStackParamList> = StackScreenProps<
  PrivateStackParamList,
  T
>;
