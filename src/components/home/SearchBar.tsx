import React from "react";
import { View, TextInput } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../theme";

export default function SearchBar() {
  return (
    <View
      className="flex-row items-center rounded-2xl px-4 py-3 mt-6 border"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
    >
      <Ionicons
        name="search"
        size={20}
        color={colors.textMuted}
      />

      <TextInput
        placeholder="Search founders, startups..."
        placeholderTextColor={colors.textMuted}
        className="flex-1 ml-3"
      />
    </View>
  );
}