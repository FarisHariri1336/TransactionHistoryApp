declare type PublicStackParamList = {
  Login: undefined;
  LoginPin: undefined;
};

declare type LoginScreenProps = StackScreenProps<PrivateStackParamList, "Login">;
declare type LoginPinScreenProps = StackScreenProps<PrivateStackParamList, "LoginPin">;
