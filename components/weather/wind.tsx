import React from "react";
import { WeatherItem } from "@/constants/types";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageSourcePropType,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Wind = ({ data }: { data: WeatherItem }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.top}>
          <Icon size={16} name={data?.icon as string} color={"#3C8AFF"} />
          <Text style={{ color: "#3C8AFF", fontSize: 12 }}>{data?.title}</Text>
        </View>
        <View style={styles.row}>
          <FlatList
            data={Object.keys(data?.value as object)}
            ItemSeparatorComponent={() => (
              <View
                style={{ height: 1, width: 150, backgroundColor: "#3C8AFF" }}
              />
            )}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <View style={styles.smalls}>
                  <View style={styles.small}>
                    <Text style={{ fontSize: 30 }}>
                      {/* @ts-ignore */}
                      {data?.value?.[item as string]}
                    </Text>
                    <View style={{ gap: 3 }}>
                      <Text style={{ fontSize: 12, color: "#3C8AFF" }}>
                        KM/H
                      </Text>
                      <Text
                        style={{ textTransform: "capitalize", fontSize: 12 }}
                      >
                        {item}
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          />
          <Image
            resizeMode="contain"
            style={{ width: 200, height: 200 }}
            source={data.image as ImageSourcePropType}
          />
        </View>
        <Text style={{ fontSize: 12, color: "#949494" }}>
          Updated: {data?.lastUpdated}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: "100%",
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  content: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "column",
    backgroundColor: "#DBF0F9",
    justifyContent: "space-between",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
  row: {
    width: "100%",
    height: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  smalls: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  small: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

export default Wind;
