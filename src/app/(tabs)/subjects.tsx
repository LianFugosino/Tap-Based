import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { themeStore } from "../../utils/themeStore";

const subjects = [
  {
    name: "Mobile Application Development",
    instructor: "Prof. Santos",
    schedule: "Mon & Wed",
  },
  {
    name: "Web Systems",
    instructor: "Prof. Garcia",
    schedule: "Tue & Thu",
  },
  {
    name: "Information Management",
    instructor: "Prof. Reyes",
    schedule: "Mon & Fri",
  },
  {
    name: "Networking",
    instructor: "Prof. Dela Cruz",
    schedule: "Wed & Fri",
  },
  {
    name: "Human Computer Interaction",
    instructor: "Prof. Lim",
    schedule: "Tue & Thu",
  },
  {
    name: "Capstone Project",
    instructor: "Panel Advisors",
    schedule: "Flexible",
  },
];

export default function Subjects() {
  const [theme, setTheme] = useState(themeStore.getTheme());

  const isDark = theme === "dark";

  useEffect(() => {
    const unsub = themeStore.subscribe(setTheme);
    return unsub;
  }, []);

  return (
    <ScrollView
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
        Subjects
      </Text>

      {/* SUBJECT CARDS */}
      {subjects.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
            padding: 20,
            borderRadius: 18,
            marginBottom: 15,

            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 6,
            elevation: 3,
          }}
        >
          <Text
            style={{
              color: isDark ? "#fff" : "#000",
              fontSize: 18,
              fontWeight: "bold",
            }}
          >
            📘 {item.name}
          </Text>

          <Text
            style={{
              color: "#94a3b8",
              marginTop: 8,
            }}
          >
            Instructor: {item.instructor}
          </Text>

          <Text
            style={{
              color: "#94a3b8",
              marginTop: 4,
            }}
          >
            Schedule: {item.schedule}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}