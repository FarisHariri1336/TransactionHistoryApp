// src/utils/getNetworkStatus.ts
import NetInfo from "@react-native-community/netinfo";

export const getNetworkStatus = async (): Promise<boolean> => {
  try {
    const state = await NetInfo.fetch();
    return Boolean(state.isConnected && state.isInternetReachable);
  } catch (error) {
    console.warn("Failed to fetch network status:", error);
    return false;
  }
};
