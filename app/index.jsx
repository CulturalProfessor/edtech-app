import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Vinayak App</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: 'blue' }}>
        Go to Profile
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "black",
  },
});
