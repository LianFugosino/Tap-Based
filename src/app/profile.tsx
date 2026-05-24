import { router } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Profile() {
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

      {/* PROFILE CONTENT */}
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/images/Profile.jpg")}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 20,
          }}
        />

        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            color: "#38bdf8",
          }}
        >
          Lian Fulgosino
        </Text>

        <Text
          style={{
            color: "#cbd5e1",
            marginTop: 10,
            fontSize: 16,
            textAlign: "center",
          }}
        >
          Bachelor of Science in Information Technology
        </Text>

        <View
          style={{
            marginTop: 30,
            backgroundColor: "#1e293b",
            padding: 20,
            borderRadius: 16,
            width: "100%",
          }}
        >
          <Text style={{ color: "#fff", marginBottom: 10 }}>
            📚 Course: BSIT
          </Text>

          <Text style={{ color: "#fff", marginBottom: 10 }}>
            🎓 Year Level: 3rd Year
          </Text>

          <Text style={{ color: "#fff" }}>
            📱 Subject: Mobile App Development
          </Text>
        </View>
      </View>
    </View>
  );
}