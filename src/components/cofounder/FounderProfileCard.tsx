import React from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../theme";

const patternDots = Array.from({ length: 84 }, (_, index) => ({
  left: (index % 12) * 27 + 8,
  top: Math.floor(index / 12) * 17 + 7,
}));

const skillTags = ["Product Strategy", "Growth Hacking", "B2B SaaS"];

export default function FounderProfileCard() {
  return (
    <View
      className="rounded-2xl border overflow-hidden"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: "#ECE7DF",
      }}
    >
      <View
        className="h-32 relative overflow-hidden"
        style={{ backgroundColor: "#EAF7FC" }}
      >
        {patternDots.map((dot, index) => (
          <View
            key={index}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: dot.left,
              top: dot.top,
              backgroundColor: "#D7EFF7",
            }}
          />
        ))}

        <View
          className="absolute top-4 left-4 flex-row items-center rounded-full px-2.5 py-1"
          style={{ backgroundColor: "#FFF6DC" }}
        >
          <Ionicons name="star" size={10} color="#D8961E" />
          <Text
            className="ml-1 text-[10px] font-bold uppercase"
            style={{ color: "#B87812" }}
          >
            Premium
          </Text>
        </View>

        <Pressable
          className="absolute top-3 right-3 h-9 w-9 rounded-full items-center justify-center"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <Ionicons name="ellipsis-horizontal" size={18} color="#5F5A54" />
        </Pressable>
      </View>

      <View className="px-5 pb-5">
        <View className="flex-row items-start justify-between">
          <View
            className="-mt-7 h-14 w-14 rounded-xl items-center justify-center"
            style={{ backgroundColor: "#5DA3C5" }}
          >
            <Text className="text-white text-xl font-bold">PS</Text>
          </View>

          <View
            className="mt-1 flex-row items-center rounded-full px-3 py-2"
            style={{ backgroundColor: "#F1FAF2" }}
          >
            <Ionicons name="flash" size={12} color="#2A8C63" />
            <Text
              className="ml-1 text-xs font-bold"
              style={{ color: "#2A8C63" }}
            >
              94% fit
            </Text>
          </View>
        </View>

        <View className="mt-4">
          <View className="flex-row items-center">
            <Text className="text-lg font-bold" style={{ color: "#111111" }}>
              Priya Sharma, 28
            </Text>
            <View
              className="ml-1.5 h-3 w-3 rounded-full"
              style={{ backgroundColor: "#2E8F68" }}
            />
          </View>

          <Text className="mt-1 text-sm" style={{ color: colors.textMuted }}>
            Product &amp; Growth
          </Text>

          <View className="mt-3 flex-row items-center">
            <Ionicons name="location-outline" size={14} color="#8E8171" />
            <Text className="ml-1 text-xs" style={{ color: "#7D7368" }}>
              Bangalore - 2.4 km
            </Text>
            <View
              className="ml-3 rounded-full px-3 py-1"
              style={{ backgroundColor: "#E9F6FC" }}
            >
              <Text
                className="text-[10px] font-bold uppercase"
                style={{ color: "#5E9EBB" }}
              >
                Idea Stage
              </Text>
            </View>
          </View>

          <View className="mt-4 flex-row flex-wrap" style={{ gap: 8 }}>
            {skillTags.map((tag) => (
              <View
                key={tag}
                className="rounded-full border px-3 py-1.5"
                style={{
                  backgroundColor: "#FBF8F1",
                  borderColor: "#E9DFCE",
                }}
              >
                <Text className="text-[11px]" style={{ color: "#6B5E4D" }}>
                  {tag}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
