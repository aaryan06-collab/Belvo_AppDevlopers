import React from "react";
import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../theme";
import Logo from "../ui/logo";

export default function Header() {
  return (
    <View className="mt-2 mb-6">
      {/* Logo */}
      <Logo />

      {/* Greeting Row */}
      <View className="flex-row justify-between items-start">
        <View>
          <Text
            className="uppercase text-xs"
            style={{ color: colors.textMuted }}
          >
            Cofounder{" "}
          </Text>

          <View className="flex-row items-center mt-1">
            <Text className="text-2xl font-bold" style={{ color: colors.text }}>
              Find your match
            </Text>
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
            <Ionicons name="search-outline" size={22} color={colors.text} />
          </Pressable>
          <Pressable
            className="rounded-full p-3 border"
            style={{
              borderColor: colors.border,
              backgroundColor: colors.card,
            }}
          >
            <Ionicons
              name="ellipsis-horizontal-outline"
              size={22}
              color={colors.text}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
