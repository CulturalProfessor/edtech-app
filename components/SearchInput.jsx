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

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className="space-x-4 flex-row border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary-200 items-center">
      <TextInput
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        className="mt-0.5 flex-1 text-white font-pregular text-base"
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <Image source={icons.search} resizeMode="contain" className="w-5 h-5" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
