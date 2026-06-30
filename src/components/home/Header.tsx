import React from "react";
import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../theme";

export default function Header() {
  return (
    <View className="mt-2 mb-6">
      {/* Logo */}
      <Text
        className="text-center tracking-[4px] font-bold mb-6"
        style={{ color: colors.brand.gold }}
      >
        FOUNDERVERSE
      </Text>

      {/* Greeting Row */}
      <View className="flex-row justify-between items-start">
        <View>
          <Text
            className="uppercase text-xs"
            style={{ color: colors.textMuted }}
          >
            Good Morning
          </Text>

          <View className="flex-row items-center mt-1">
            <Text
              className="text-3xl font-bold"
              style={{ color: colors.text }}
            >
              Rahul Singh
            </Text>

            <View
              className="w-2 h-2 rounded-full ml-2"
              style={{ backgroundColor: colors.success }}
            />
          </View>
        </View>

        <View className="flex-row items-center gap-3">
          <Pressable
            className="rounded-full p-3 border"
            style={{
              borderColor: colors.border,
              backgroundColor: colors.card,
            }}
          >
            <Ionicons
              name="notifications-outline"
              size={22}
              color={colors.text}
            />
          </Pressable>

          <View
            className="w-12 h-12 rounded-full justify-center items-center"
            style={{ backgroundColor: "#6BA7D6" }}
          >
            <Text className="text-white font-bold">RS</Text>
          </View>
        </View>
      </View>
    </View>
  );
}