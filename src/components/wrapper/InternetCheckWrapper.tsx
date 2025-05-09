import React, { useEffect, useState } from "react";
import { BasicModal } from "../Modals";
import { NoInternet } from "../../screens/NoInternet";
import { useHasInternetConnection } from "../../hooks";

interface InternetCheckWrapperProps {
  children: React.ReactNode;
}

export const InternetCheckWrapper: React.FC<InternetCheckWrapperProps> = ({ children }) => {
  const hasInternet = useHasInternetConnection();
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(!hasInternet);
  }, [hasInternet]);

  return (
    <>
      <BasicModal visible={isModalVisible} hasBackdrop>
        <NoInternet onPressTryAgain={() => {}} />
      </BasicModal>
      {children}
    </>
  );
};
