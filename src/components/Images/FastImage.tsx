import React, { FunctionComponent } from "react";
import { Image, ImageProps } from "react-native";

interface CustomImageProps extends ImageProps {
  testId?: string;
}

export const CustomImage: FunctionComponent<CustomImageProps> = (props: CustomImageProps) => {
  return <Image {...props} resizeMode={props.resizeMode ?? "contain"} />;
};
