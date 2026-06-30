import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../theme";

type Props = {
  title: string;
  value: string;
  icon: keyof typeof Ionicons.glyphMap;
  iconColor: string;
};

export default function StatsCard({
  title,
  value,
  icon,
  iconColor,
}: Props) {
  return (
    <View
      className="rounded-2xl w-[48%] p-5 border"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
    >
      <Ionicons
        name={icon}
        size={28}
        color={iconColor}
      />

      <Text
        className="mt-3"
        style={{ color: colors.textMuted }}
      >
        {title}
      </Text>

      <Text
        className="text-3xl font-bold mt-2"
        style={{ color: colors.text }}
      >
        {value}
      </Text>
    </View>
  );
}