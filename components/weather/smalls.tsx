import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { WeatherItem } from "@/constants/types";
import Small from "./small";

const Smalls = ({ data }: { data: WeatherItem[] }) => {
  return (
    <FlatList
      horizontal
      data={data}
      style={styles.container}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => <Small data={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
    height: 120,
    marginBottom: 0,
    marginVertical: 15,
  },
});

export default Smalls;
