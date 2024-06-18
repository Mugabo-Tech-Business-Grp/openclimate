import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Weather = () => {
  return (
    <View style={styles.container}>
      <Text>Weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Weather;
