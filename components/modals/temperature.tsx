import {
  View,
  Text,
  Image,
  FlatList,
  Animated,
  StyleSheet,
  ImageSourcePropType,
} from "react-native";
import React, { useRef, useState } from "react";
import { Agenda } from "react-native-calendars";
import Icon from "react-native-vector-icons/Entypo";

// Imports
import lorem from "@/assets/data/lorem";
import { TemperatureItem } from "@/constants/types";
import { temperatures } from "@/assets/data/weather";

const TemperatureModal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef<FlatList<unknown> | null>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const anEvent = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: scrollX,
          },
        },
      },
    ],
    { useNativeDriver: false }
  );

  return (
    <View style={styles.container}>
      <Agenda
        hideKnob={true}
        style={{ width: "100%" }}
        renderEmptyData={() => (
          <View style={styles.content}>
            <FlatList
              horizontal
              ref={slidesRef}
              bounces={false}
              onScroll={anEvent}
              pagingEnabled={true}
              scrollEventThrottle={32}
              viewabilityConfig={viewConfig}
              data={temperatures as TemperatureItem[]}
              // @ts-ignore
              keyExtractor={(item) => item.id}
              showsHorizontalScrollIndicator={false}
              onViewableItemsChanged={viewableItemsChanged}
              renderItem={({ item }) => (
                <View style={styles.page}>
                  <View style={styles.box}>
                    <Text>Temperature</Text>
                    <Image
                      resizeMode="contain"
                      // @ts-ignore
                      source={item?.image as ImageSourcePropType}
                    />
                    {/* @ts-ignore */}
                    <Text style={{ fontSize: 30 }}>{item?.value}°C</Text>
                    {/* @ts-ignore */}
                    <Text style={{ fontSize: 12 }}>{item?.title}</Text>
                    <View style={{ flexDirection: "row", gap: 20 }}>
                      {/* @ts-ignore */}
                      <Text style={{ fontSize: 12 }}>H: {item?.high}</Text>
                      {/* @ts-ignore */}
                      <Text style={{ fontSize: 12 }}>L: {item?.low}</Text>
                    </View>
                  </View>
                  <View style={styles.para}>
                    <Text style={{ marginBottom: 10 }}>What it means:</Text>
                    <FlatList
                      data={lorem}
                      style={{ width: 340 }}
                      renderItem={({ item }) => (
                        <View style={{ flexDirection: "row" }}>
                          <Icon
                            size={15}
                            name="dot-single"
                            color={"#3C8AFF"}
                            style={{ marginRight: 5 }}
                          />
                          <Text style={{ fontSize: 12, color: "#949494" }}>
                            {item}
                          </Text>
                        </View>
                      )}
                    />
                  </View>
                </View>
              )}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: 170,
    alignItems: "center",
    borderTopEndRadius: 20,
    justifyContent: "center",
    borderTopStartRadius: 20,
    backgroundColor: "#DBF0F9",
  },
  content: {
    flex: 3,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DBF0F9",
  },
  page: {
    flex: 1,
  },
  box: {
    width: 375,
    height: 280,
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    alignItems: "center",
    backgroundColor: "#87CEEB",
    justifyContent: "space-between",
  },
  para: {
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

export default TemperatureModal;
