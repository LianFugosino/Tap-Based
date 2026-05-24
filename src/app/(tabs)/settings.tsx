import { useEffect, useState } from "react";
import {
    Alert,
    Pressable,
    Switch,
    Text,
    View,
} from "react-native";

import { themeStore } from "../../utils/themeStore";

export default function Settings() {
  const [theme, setTheme] = useState<"light" | "dark">(
    themeStore.getTheme()
  );

  const [notifications, setNotifications] = useState(true);

  const isDark = theme === "dark";

  // ✅ listen to global theme changes
  useEffect(() => {
    const unsub = themeStore.subscribe(setTheme);
    return unsub;
  }, []);

  const toggleTheme = () => {
    themeStore.setTheme(isDark ? "light" : "dark");
  };

  const showAbout = () => {
    Alert.alert(
      "Student Learning App",
      "Created for Mobile Application Development Activity."
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? "#0f172a" : "#f1f5f9",
        padding: 20,
      }}
    >
      {/* TITLE */}
      <Text
        style={{
          fontSize: 34,
          fontWeight: "bold",
          color: "#38bdf8",
          marginBottom: 20,
        }}
      >
        Settings
      </Text>

      {/* DARK MODE */}
      <View
        style={{
          backgroundColor: isDark ? "#1e293b" : "#fff",
          padding: 18,
          borderRadius: 18,
          marginBottom: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: isDark ? "#fff" : "#000",
            fontSize: 18,
          }}
        >
          🌙 Dark Mode
        </Text>

        <Switch
          value={isDark}
          onValueChange={toggleTheme}
        />
      </View>

      {/* NOTIFICATIONS */}
      <View
        style={{
          backgroundColor: isDark ? "#1e293b" : "#fff",
          padding: 18,
          borderRadius: 18,
          marginBottom: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: isDark ? "#fff" : "#000",
            fontSize: 18,
          }}
        >
          🔔 Notifications
        </Text>

        <Switch
          value={notifications}
          onValueChange={setNotifications}
        />
      </View>

      {/* ABOUT */}
      <Pressable
        onPress={showAbout}
        style={{
          backgroundColor: "#38bdf8",
          padding: 18,
          borderRadius: 18,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          About App
        </Text>
      </Pressable>

      {/* VERSION */}
      <Text
        style={{
          color: "#94a3b8",
          textAlign: "center",
          marginTop: 30,
        }}
      >
        Version 1.0.0
      </Text>
    </View>
  );
}