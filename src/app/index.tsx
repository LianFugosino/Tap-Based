import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0f172a",
        padding: 25,
        justifyContent: "center",
      }}
    >
      {/* LOGO */}
      <Image
        source={require("../../assets/Logo.png")} // ✅ FIX PATH (adjust if needed)
        style={{
          width: 120,
          height: 120,
          alignSelf: "center",
          marginBottom: 20,
        }}
        resizeMode="contain"
      />

      {/* TITLE */}
      <Text
        style={{
          fontSize: 38,
          fontWeight: "bold",
          color: "#38bdf8",
          marginBottom: 10,
          marginLeft: 19,
        }}
      >
        Student Learning
      </Text>

      <Text
        style={{
          fontSize: 16,
          color: "#cbd5e1",
          marginBottom: 40,
          marginLeft: 21,
        }}
      >
        Mobile Application Development Activity
      </Text>

      {/* BUTTONS */}
      <Pressable
        onPress={() => router.push("/profile")}   // ✅ FIX
        style={{
          backgroundColor: "#38bdf8",
          padding: 18,
          borderRadius: 16,
          marginBottom: 15,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
          Open Profile
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/course-details")}  // ✅ FIX
        style={{
          backgroundColor: "#1e293b",
          padding: 18,
          borderRadius: 16,
          marginBottom: 15,
          borderWidth: 1,
          borderColor: "#38bdf8",
        }}
      >
        <Text style={{ color: "#38bdf8", textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
          Course Details
        </Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/(tabs)/dashboard")}
        style={{
          backgroundColor: "#22c55e",
          padding: 18,
          borderRadius: 16,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 18, fontWeight: "bold" }}>
          Open Dashboard
        </Text>
      </Pressable>
    </View>
  );
}