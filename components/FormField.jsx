import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="flex-row border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-200 items-center">
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          className="flex-1 text-white font-psemibold text-base"
          secureTextEntry={title === "Password" && !showPassword}
        />
        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="w-[20px] h-[20px]"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
