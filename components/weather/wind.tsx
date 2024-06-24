import React from "react";
import { WeatherItem } from "@/constants/types";
import { View, Text, StyleSheet } from "react-native";

const Wind = ({ data }: { data: WeatherItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Wind;
