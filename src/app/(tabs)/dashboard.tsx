import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { themeStore } from "../../utils/themeStore";

export default function Dashboard() {
  const [theme, setTheme] = useState(themeStore.getTheme());

  const isDark = theme === "dark";

  useEffect(() => {
    const unsub = themeStore.subscribe(setTheme);
    return unsub;
  }, []);

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
        Dashboard
      </Text>

      {/* WELCOME CARD */}
      <View
        style={{
          backgroundColor: isDark ? "#1e293b" : "#ffffff",
          padding: 20,
          borderRadius: 18,
          marginBottom: 18,
        }}
      >
        <Text
          style={{
            color: isDark ? "#fff" : "#000",
            fontSize: 22,
            fontWeight: "bold",
          }}
        >
          Welcome Student 👋
        </Text>

        <Text
          style={{
            color: isDark ? "#cbd5e1" : "#475569",
            marginTop: 10,
            fontSize: 16,
          }}
        >
          Track your subjects, assignments, and learning progress.
        </Text>
      </View>

      {/* STATS */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
            width: "48%",
            padding: 20,
            borderRadius: 18,
          }}
        >
          <Text style={{ color: "#94a3b8" }}>Subjects</Text>

          <Text
            style={{
              color: isDark ? "#fff" : "#000",
              fontSize: 28,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            6
          </Text>
        </View>

        <View
          style={{
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
            width: "48%",
            padding: 20,
            borderRadius: 18,
          }}
        >
          <Text style={{ color: "#94a3b8" }}>Assignments</Text>

          <Text
            style={{
              color: isDark ? "#fff" : "#000",
              fontSize: 28,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            12
          </Text>
        </View>
      </View>

      {/* ANNOUNCEMENTS */}
      <View
        style={{
          marginTop: 20,
          backgroundColor: isDark ? "#1e293b" : "#ffffff",
          padding: 20,
          borderRadius: 18,
        }}
      >
        <Text
          style={{
            color: "#38bdf8",
            fontSize: 20,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          Announcements
        </Text>

        <Text style={{ color: isDark ? "#fff" : "#000", marginBottom: 10 }}>
          📢 Midterm project submission next week.
        </Text>

        <Text style={{ color: isDark ? "#fff" : "#000", marginBottom: 10 }}>
          📢 Mobile App Development quiz on Friday.
        </Text>

        <Text style={{ color: isDark ? "#fff" : "#000" }}>
          📢 Attendance checking every Monday.
        </Text>
      </View>
    </View>
  );
}