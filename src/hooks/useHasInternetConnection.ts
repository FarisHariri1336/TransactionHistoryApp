import { useNetInfo } from "@react-native-community/netinfo";

export const useHasInternetConnection = () => {
  const { isConnected, isInternetReachable } = useNetInfo();

  if (isConnected === null || isInternetReachable === null) {
    return true; // treat as connected during initial state
  }

  return isConnected && isInternetReachable;
};
