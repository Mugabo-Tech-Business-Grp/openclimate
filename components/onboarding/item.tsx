import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ImageSourcePropType,
} from "react-native";
import React from "react";

const OnboardingItem = ({
  item,
}: {
  item: { id: string; image: string; title: string; description: string };
}) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="contain"
          style={[styles.image]}
          source={item.image as ImageSourcePropType}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#87CEEB",
  },
  imageContainer: {
    flex: 0.6,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DBF0F9",
  },
  image: {
    flex: 0.8,
    marginLeft: -30,
    marginBottom: -90,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "800",
    color: "#0093E9",
  },
  description: {
    color: "#151515",
    textAlign: "center",
    paddingHorizontal: 40,
  },
});

export default OnboardingItem;
