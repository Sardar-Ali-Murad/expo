import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Business",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "business" : "business-outline"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="property"
        options={{
          title: "KPI",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "list" : "list"}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="security"
        options={{
          title: "Orders",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "bar-chart" : "bar-chart"}
              color={color}
            />
          ),
        }}
      />
   
    </Tabs>
  );
}
