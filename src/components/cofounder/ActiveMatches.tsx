import React from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../theme";

const activeMatches = [
  {
    initials: "PS",
    name: "Priya Sharma",
    details: "Product & Growth - Bangalore - 2.4 km",
    fit: "94%",
    avatarColor: "#5DA3C5",
  },
  {
    initials: "AM",
    name: "Arjun Mehta",
    details: "Full-Stack Engineer - Mumbai - 5.1 km",
    fit: "87%",
    avatarColor: "#D39B2F",
  },
  {
    initials: "SK",
    name: "Sneha Kapoor",
    details: "Brand & Sales - Delhi - 8.3 km",
    fit: "79%",
    avatarColor: "#EDA878",
  },
];

export default function ActiveMatches() {
  return (
    <View className="mt-5 pb-8">
      <Text className="text-[10px] uppercase" style={{ color: "#8B7A67" }}>
        Active matches
      </Text>

      <View className="mt-3" style={{ gap: 12 }}>
        {activeMatches.map((match) => (
          <View
            key={match.name}
            className="rounded-2xl border px-4 py-4 flex-row items-center"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#ECE7DF",
            }}
          >
            <View className="relative">
              <View
                className="h-12 w-12 rounded-xl items-center justify-center"
                style={{ backgroundColor: match.avatarColor }}
              >
                <Text className="text-white font-bold">{match.initials}</Text>
              </View>
              <View
                className="absolute -right-0.5 -bottom-0.5 h-3.5 w-3.5 rounded-full border-2"
                style={{
                  backgroundColor: "#3A9B7A",
                  borderColor: "#FFFFFF",
                }}
              />
            </View>

            <View className="ml-3 flex-1">
              <View className="flex-row items-center">
                <Text
                  className="font-bold"
                  numberOfLines={1}
                  style={{ color: "#111111", flexShrink: 1 }}
                >
                  {match.name}
                </Text>
                <Ionicons
                  name="checkmark-circle-outline"
                  size={13}
                  color="#3A9B7A"
                  style={{ marginLeft: 4 }}
                />
              </View>

              <Text
                className="mt-1 text-xs"
                numberOfLines={1}
                style={{ color: colors.textMuted }}
              >
                {match.details}
              </Text>
            </View>

            <View className="ml-3 items-center">
              <View
                className="rounded-full px-2 py-1"
                style={{ backgroundColor: "#F1FAF2" }}
              >
                <Text
                  className="text-[10px] font-bold"
                  style={{ color: "#2A8C63" }}
                >
                  {match.fit}
                </Text>
              </View>

              <Pressable
                className="mt-2 h-9 w-9 rounded-full items-center justify-center"
                style={{ backgroundColor: "#F7F3ED" }}
              >
                <Ionicons name="chatbubble-outline" size={17} color="#8A7A67" />
              </Pressable>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
