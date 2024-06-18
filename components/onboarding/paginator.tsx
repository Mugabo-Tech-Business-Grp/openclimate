import React from "react";
import { View, Animated, StyleSheet, useWindowDimensions } from "react-native";

const Paginator = ({
  slides,
  scrollX,
}: {
  scrollX: any;
  slides: { id: string; image: string; title: string; description: string }[];
}) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {slides?.map((_, index) => {
        const inputRange = [
          (index - 1) * width,
          index * width,
          (index + 1) * width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 30, 10],
          extrapolate: "clamp",
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: "clamp",
        });

        const AnimatedView = Animated.createAnimatedComponent(View);

        return (
          <AnimatedView
            key={index.toString()}
            style={[styles.dot, { width: dotWidth, opacity }]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 64,
    zIndex: 10,
    position: "absolute",
    flexDirection: "row",
  },
  dot: {
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "#0093E9",
  },
});

export default Paginator;
