import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";

// Imports
import { Disaster } from "@/constants/types";
import disasters from "@/assets/data/disasters";

const Disasters = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.list}
        data={disasters as Disaster[]}
        renderItem={({ item }) => {
          return (
            <View style={styles.disaster}>
              <View style={styles.top}>
                <View
                  style={[
                    styles.status,
                    {
                      backgroundColor:
                        item?.status == "warning" ? "#EAD300" : "#EA5400",
                    },
                  ]}
                >
                  <Text style={{ fontSize: 12, textTransform: "capitalize" }}>
                    {item?.status}
                  </Text>
                </View>
              </View>
              <View style={styles.content}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    marginRight: 10,
                    borderRadius: 50,
                    backgroundColor: "#87CEEB",
                  }}
                ></View>
                <View style={{ gap: 3 }}>
                  <Text style={{ fontSize: 12, fontWeight: "bold" }}>
                    {item?.title}
                  </Text>
                  <Text style={{ fontSize: 12, color: "#3C8AFF" }}>
                    {item?.time}
                  </Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 12, textAlign: "justify" }}>
                  {item?.content}
                </Text>
              </View>
            </View>
          );
        }}
        ListHeaderComponent={
          <View style={styles.head}>
            <View style={styles.para}>
              <Text style={{ fontSize: 18 }}>Disaster Alerts!</Text>
              <View style={styles.location}>
                <Icon name="location-outline" size={14} color={"#000000"} />
                <Text style={{ fontSize: 12 }}>Mukamira</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notification}>
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
    height: "auto",
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
  disaster: {
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: "#DBF0F9",
  },
  top: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  status: {
    height: 30,
    borderRadius: 50,
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  content: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Disasters;
