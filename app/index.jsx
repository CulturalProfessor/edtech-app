import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl font-pblack">Vinayak App</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-400">
        Go to Home
      </Link>
    </View>
  );
}
