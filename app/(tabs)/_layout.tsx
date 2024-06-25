import { Tabs } from "expo-router";
import React, { Fragment } from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const TabsLayout = () => {
  return (
    <Fragment>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#3C8AFF",
          tabBarInactiveTintColor: "#949494",
          tabBarStyle: {
            height: 84,
            borderTopWidth: 1,
            backgroundColor: "#DBF0F9",
          },
        }}
      >
        <Tabs.Screen
          name="weather"
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Icon name="weather-fog" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="map"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Icon name="map-outline" size={24} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <Icon name="account-settings-outline" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="disasters"
          options={{
            headerShown: false,
            tabBarButton: () => null,
          }}
        />
      </Tabs>
    </Fragment>
  );
};

export default TabsLayout;
