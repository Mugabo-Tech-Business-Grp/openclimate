import React from "react";
import { useNavigation } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// Data
import weather from "@/assets/data/weather";
import { WeatherItem } from "@/constants/types";

// Components
import Wind from "@/components/weather/wind";
import Smalls from "@/components/weather/smalls";
import Temperature from "@/components/weather/temperature";

const Weather = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={weather as WeatherItem[]}
        keyExtractor={(item) => item?.id}
        renderItem={({ item }) => {
          if (item?.type === "temperature") {
            return <Temperature data={item} />;
          }

          if (item?.type === "smalls") {
            return <Smalls data={item?.data!!} />;
          }

          if (item?.type === "wind") {
            return <Wind data={item} />;
          }

          return null;
        }}
        ListHeaderComponent={
          <View style={styles.head}>
            <View style={styles.para}>
              <Text style={{ fontSize: 18 }}>Stay Safe!</Text>
              <View style={styles.location}>
                <Icon name="location-outline" size={14} color={"#000000"} />
                <Text style={{ fontSize: 12 }}>Mukamira</Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.notification}
              // @ts-ignore
              onPress={() => navigation.navigate("disasters")}
            >
              <Icon name="notifications-outline" size={20} color={"#000000"} />
              <View style={styles.number}>
                <Text style={{ color: "white", fontSize: 12 }}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#87CEEB",
  },
  list: {
    width: "100%",
    height: "100%",
    backgroundColor: "#87CEEB",
  },
  head: {
    height: 100,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  para: {
    gap: 8,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  location: {
    gap: 2,
    flexDirection: "row",
    alignItems: "center",
  },
  notification: {
    width: 45,
    height: 45,
    marginRight: 10,
    borderRadius: 40,
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  number: {
    height: 25,
    width: 25,
    position: "absolute",
    top: -8,
    right: -8,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3C8AFF",
  },
  temperature: {
    width: "100%",
    height: 150,
    backgroundColor: "#DBF0F9",
  },
});

export default Weather;
