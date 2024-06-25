import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { WeatherItem } from "@/constants/types";
import React, { Fragment, useState } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// Components
import SmallModal from "../modals/small";

const Small = ({ data }: { data: WeatherItem }) => {
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
              top: 0,
              flex: 1,
              left: 0,
              zIndex: -1,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          />
        </TouchableWithoutFeedback>
        <SmallModal title={data?.title} />
      </Modal>
      <TouchableOpacity
        style={styles.container}
        onPress={() => setModalVisible(true)}
      >
        <View
          style={[
            styles.content,
            {
              backgroundColor: data?.background ? data?.background : "#DBF0F9",
            },
          ]}
        >
          <View style={styles.top}>
            <Icon
              size={18}
              name={data?.icon as string}
              color={data?.background ? "#ffffff" : "#3C8AFF"}
            />
            <Text
              style={{
                fontSize: 12,
                color: data?.background ? "#ffffff" : "#3C8AFF",
              }}
            >
              {data?.title}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 30,
              color: data?.background ? "#ffffff" : "#151515",
            }}
          >
            {data?.value as string}
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: data?.background ? "#ffffff" : "#949494",
            }}
          >
            Updated: {data?.lastUpdated}
          </Text>
        </View>
      </TouchableOpacity>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 196,
    height: 120,
    paddingHorizontal: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  content: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
  },
});

export default Small;
