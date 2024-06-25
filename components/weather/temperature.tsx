import { WeatherItem } from "@/constants/types";
import React, { Fragment, useState } from "react";
import {
  View,
  Text,
  Image,
  Modal,
  StyleSheet,
  TouchableOpacity,
  ImageSourcePropType,
  TouchableWithoutFeedback,
} from "react-native";

// Components
import TemperatureModal from "../modals/temperature";

const Temperature = ({ data }: { data: WeatherItem }) => {
  const [modalVisibe, setModalVisible] = useState(false);

  return (
    <Fragment>
      <Modal
        transparent={true}
        collapsable={true}
        animationType="slide"
        visible={modalVisibe}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              flex: 1,
              top: 0,
              left: 0,
              zIndex: -1,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          />
        </TouchableWithoutFeedback>
        <TemperatureModal />
      </Modal>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
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
      </TouchableOpacity>
    </Fragment>
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
