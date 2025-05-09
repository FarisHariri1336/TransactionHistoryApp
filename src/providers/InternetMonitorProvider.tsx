// src/providers/InternetMonitorProvider.tsx
import React, { useEffect, useState } from "react";
import NetInfo from "@react-native-community/netinfo";
import { NoInternet } from "../screens//NoInternet";
import { BasicModal } from "../components/Modals/";

interface InternetMonitorProviderProps {
  children: React.ReactNode;
}

export const InternetMonitorProvider: React.FC<InternetMonitorProviderProps> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const online = Boolean(state.isConnected && state.isInternetReachable);
      setIsConnected(online);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <BasicModal visible={!isConnected} hasBackdrop>
        <NoInternet onPressTryAgain={() => {}} onPressCancel={() => {}} />
      </BasicModal>
      {children}
    </>
  );
};
