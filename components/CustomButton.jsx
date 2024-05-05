import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.8}
      className={`${containerStyles}  bg-secondary rounded-xl min-h-[62px] justify-center items-center ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
