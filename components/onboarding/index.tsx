import React, { useRef, useState } from "react";
import { View, FlatList, Animated, StyleSheet } from "react-native";

// Imports
import NextButton from "./button";
import Paginator from "./paginator";
import OnboardingItem from "./item";
import slides from "@/assets/data/slides";

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const slidesRef = useRef<FlatList<unknown> | null>(null);

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (slidesRef.current && currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("last item");
    }
  };

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
      <Paginator slides={slides} scrollX={scrollX} />
      <View style={{ flex: 3 }}>
        <FlatList
          horizontal
          data={slides}
          bounces={false}
          ref={slidesRef}
          onScroll={anEvent}
          pagingEnabled={true}
          scrollEventThrottle={32}
          viewabilityConfig={viewConfig}
          keyExtractor={(item) => item?.id}
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={viewableItemsChanged}
          renderItem={({ item }) => <OnboardingItem item={item} />}
        />
      </View>
      <NextButton scrollTo={scrollTo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Onboarding;
