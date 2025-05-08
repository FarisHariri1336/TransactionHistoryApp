import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import BootSplash from "react-native-bootsplash";

import { RootNavigator } from "./src/navigation/RootNavigator";
import { InternetMonitorProvider } from "./src/providers/InternetMonitorProvider";
import { InternetCheckWrapper } from "./src/components/wrapper/InternetCheckWrapper";
import { View, TouchableOpacity } from "react-native";
import Toast, { ToastConfig, BaseToast } from "react-native-toast-message";
import { AuthProvider } from "./src/context/AuthContext";
import { InactivityWrapper } from "./src/components/wrapper/InactivityWrapper";

export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <AuthProvider>
          <NavigationContainer
            onReady={() => {
              BootSplash.hide();
            }}>
            <InternetCheckWrapper>
              <RootNavigator />
            </InternetCheckWrapper>
          </NavigationContainer>
          <Toast />
        </AuthProvider>
      </SafeAreaProvider>
    </>
  );
}
