import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useEffect, useState } from "react";

import { themeStore } from "../../utils/themeStore";

export default function TabsLayout() {
  const [theme, setTheme] = useState(themeStore.getTheme());

  const isDark = theme === "dark";

  useEffect(() => {
    const unsub = themeStore.subscribe(setTheme);
    return unsub;
  }, []);

  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: isDark ? "#0f172a" : "#ffffff",
        },

        headerTintColor: isDark ? "#fff" : "#000",

        tabBarStyle: {
          backgroundColor: isDark ? "#0f172a" : "#ffffff",
          borderTopWidth: 0,
          height: 65,
          paddingBottom: 8,
        },

        tabBarActiveTintColor: "#38bdf8",
        tabBarInactiveTintColor: isDark ? "#94a3b8" : "#64748b",
      }}
    >
      {/* DASHBOARD */}
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />

      {/* SUBJECTS */}
      <Tabs.Screen
        name="subjects"
        options={{
          title: "Subjects",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book" color={color} size={size} />
          ),
        }}
      />

      {/* SETTINGS */}
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}