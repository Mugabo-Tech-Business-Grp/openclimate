import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const NextButton = ({ scrollTo }: { scrollTo: () => void }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={scrollTo}>
      <Text style={styles.text}>Continue</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    zIndex: 10,
    bottom: 100,
    width: "50%",
    borderRadius: 5,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0093E9",
  },
  text: {
    color: "white",
  },
});

export default NextButton;
