import React, { FC, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { LoginTemplate } from "../../templates/login-template";
import { useAuth } from "../context/AuthContext";
import { colorGreen, sw24 } from "../styles";

export const LoginPinScreen: FC<LoginPinScreenProps> = () => {
  const navigation = useNavigation();
  const { login } = useAuth();

  const [pinValue, setPinValue] = useState<string>("");
  const [pinArray, setPinArray] = useState<string[]>(["*", "*", "*", "*", "*", "*"]);
  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);

  const updatePinArray = () => {
    setPinArray([...pinValue.split(""), ...Array(6 - pinValue.length).fill("*")]);
  };

  const handleClearState = () => {
    setPinArray(["*", "*", "*", "*", "*", "*"]);
    setPinValue("");
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleValidate = () => {
    if (pinValue === "000000") {
      login();
    } else {
      setErrorMessage("Incorrect PIN. Please try again.");
      handleClearState();
    }
  };

  useEffect(() => {
    updatePinArray();
    if (pinValue.length === 6) {
      handleValidate();
    }
  }, [pinValue]);

  return (
    <LoginTemplate
      headerLeftIcon={{ name: "chevron-back-outline", color: colorGreen._1, size: sw24, onPress: handleGoBack }}
      error={errorMessage}
      label="Enter your PIN"
      pinArray={pinArray}
      pinValue={pinValue}
      setPinValue={setPinValue}
    />
  );
};
