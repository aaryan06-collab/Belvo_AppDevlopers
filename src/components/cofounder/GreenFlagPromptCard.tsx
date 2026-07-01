import React from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function GreenFlagPromptCard() {
  return (
    <View
      className="mt-4 rounded-2xl border overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "#ECE7DF",
      }}
    >
      <View className="p-5">
        <Text className="text-[10px] uppercase" style={{ color: "#8B7A67" }}>
          My co-founder green flag is...
        </Text>

        <Text
          className="mt-3 text-base leading-6"
          style={{ color: "#111111" }}
        >
          Someone who ships fast, argues openly in meetings, and goes quiet
          when the idea needs thinking.
        </Text>
      </View>

      <View
        className="h-px"
        style={{
          backgroundColor: "#EEE8DF",
        }}
      />

      <View className="flex-row">
        <Pressable className="h-10 flex-1 flex-row items-center justify-center">
          <Ionicons name="heart-outline" size={18} color="#8A7A67" />
          <Text className="ml-2 text-xs font-semibold" style={{ color: "#6E5F4B" }}>
            Like prompt
          </Text>
        </Pressable>

        <View className="w-px" style={{ backgroundColor: "#EEE8DF" }} />

        <Pressable className="h-10 flex-1 flex-row items-center justify-center">
          <Ionicons name="chatbubble-outline" size={17} color="#8A7A67" />
          <Text className="ml-2 text-xs font-semibold" style={{ color: "#6E5F4B" }}>
            Comment
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
