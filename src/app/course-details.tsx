import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function CourseDetails() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        padding: 20,
      }}
    >
      {/* 🔙 BACK BUTTON */}
      <Pressable
        onPress={() => router.back()}
        style={{
          marginTop: 40,
          marginBottom: 20,
          alignSelf: "flex-start",
          paddingVertical: 8,
          paddingHorizontal: 12,
          backgroundColor: "#1e293b",
          borderRadius: 10,
        }}
      >
        <Text style={{ color: "#38bdf8", fontSize: 16, fontWeight: "bold" }}>
          ← Back
        </Text>
      </Pressable>

      {/* TITLE */}
      <Text
        style={{
          fontSize: 34,
          fontWeight: "bold",
          color: "#38bdf8",
          marginBottom: 25,
        }}
      >
        Course Details
      </Text>

      {/* CONTENT */}
      <View
        style={{
          backgroundColor: "#1e293b",
          padding: 20,
          borderRadius: 18,
          marginBottom: 15,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>
          📘 Subject: Mobile Application Development
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#1e293b",
          padding: 20,
          borderRadius: 18,
          marginBottom: 15,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>
          👨‍🏫 Instructor: Prof. Gabotero
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#1e293b",
          padding: 20,
          borderRadius: 18,
        }}
      >
        <Text style={{ color: "#fff", fontSize: 18 }}>
          🕒 Schedule: Monday & Wednesday
        </Text>
      </View>
    </View>
  );
}