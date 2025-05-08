import ReactNativeBiometrics from "react-native-biometrics";

export const authenticateBiometric = async (): Promise<boolean> => {
  const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });
  const { available, error } = await rnBiometrics.isSensorAvailable();

  if (!available) return false;

  const { success } = await rnBiometrics.simplePrompt({
    promptMessage: "Authenticate to proceed",
  });

  return success;
};
