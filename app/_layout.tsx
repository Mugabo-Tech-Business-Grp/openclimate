import { useEffect } from "react";

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    "Assistant-Bold": require("../assets/fonts/Assistant-Bold.ttf"),
    "Assistant-Light": require("../assets/fonts/Assistant-Light.ttf"),
    "Assistant-Medium": require("../assets/fonts/Assistant-Medium.ttf"),
    "Assistant-Regular": require("../assets/fonts/Assistant-Regular.ttf"),
    "Assistant-SemiBold": require("../assets/fonts/Assistant-SemiBold.ttf"),
    "Assistant-ExtraBold": require("../assets/fonts/Assistant-ExtraBold.ttf"),
    "Assistant-ExtraLight": require("../assets/fonts/Assistant-ExtraLight.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
