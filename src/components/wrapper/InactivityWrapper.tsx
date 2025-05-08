import React, { useState, useRef, useEffect } from "react";
import { View } from "react-native";
import UserInactivity from "react-native-user-inactivity";
import { useAuth } from "../../context/AuthContext";
import { BasicModal, BottomSliderPage } from "../../components";
import { flexChild, justifyContentEnd, noMargin } from "../../styles";
import { Language } from "../../constants";
import { LocalAssets } from "../../assets/images/LocalAssets";

const { INACTIVITY } = Language.BOTTOM_SLIDER;

export const InactivityWrapper = ({ children }: { children: React.ReactNode }) => {
  const { logout } = useAuth();
  const [isActive, setIsActive] = useState(true);
  const [showWarning, setShowWarning] = useState(false);

  const warningTimer = useRef<NodeJS.Timeout | null>(null);
  const logoutTimer = useRef<NodeJS.Timeout | null>(null);

  const handleInactivity = (isUserActive: boolean) => {
    if (!isUserActive) {
      if (!warningTimer.current && !logoutTimer.current) {
        warningTimer.current = setTimeout(() => {
          setShowWarning(true);
        }, 20000);

        logoutTimer.current = setTimeout(() => {
          logout();
          setShowWarning(false);
        }, 30000);
      }
    } else {
      clearTimeout(warningTimer.current!);
      clearTimeout(logoutTimer.current!);
      warningTimer.current = null;
      logoutTimer.current = null;
      setShowWarning(false);
    }

    setIsActive(isUserActive);
  };

  const resetInactivity = () => {
    setIsActive(true);
    setShowWarning(false);
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimeout(warningTimer.current!);
      clearTimeout(logoutTimer.current!);
    };
  }, []);

  return (
    <>
      <UserInactivity timeForInactivity={20000} isActive={isActive} onAction={handleInactivity}>
        <View style={flexChild}>{children}</View>
      </UserInactivity>

      <BasicModal
        visible={showWarning}
        onClose={resetInactivity}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        backdropOpacity={0.6}
        hasBackdrop
        style={{ ...justifyContentEnd, ...noMargin }}>
        <BottomSliderPage
          onDismiss={resetInactivity}
          primaryButton={{ title: INACTIVITY.STAY_SIGN_IN, onPress: resetInactivity }}
          show
          subtitle={INACTIVITY.WILL_LOG_OUT}
          title={INACTIVITY.STILL_THERE}
          image={LocalAssets.illustration.biometric}
        />
      </BasicModal>
    </>
  );
};
