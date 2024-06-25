import React from "react";
import { WeatherItem } from "@/constants/types";
import { ImageSourcePropType } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";

const Temperature = ({ data }: { data: WeatherItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.temperature}>
          <Text style={{ fontSize: 12 }}>{data?.title}</Text>
          {/* @ts-ignore */}
          <Text style={{ fontSize: 30 }}>{data?.value?.temperature}°C</Text>
        </View>
        <View style={styles.stats}>
          {/* @ts-ignore */}
          <Text style={{ fontSize: 12 }}>L: {data?.value?.low}</Text>
          {/* @ts-ignore */}
          <Text style={{ fontSize: 12 }}>H: {data?.value?.high}</Text>
          <Text style={{ fontSize: 12, color: "#949494" }}>
            Upt: {data?.lastUpdated}
          </Text>
        </View>
        <Image
          resizeMode="contain"
          source={data.image as ImageSourcePropType}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: "100%",
    paddingHorizontal: 10,
  },
  content: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: "#DBF0F9",
    justifyContent: "space-between",
  },
  temperature: {
    gap: 10,
    alignItems: "center",
  },
  stats: {
    gap: 10,
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
  },
});

export default Temperature;
