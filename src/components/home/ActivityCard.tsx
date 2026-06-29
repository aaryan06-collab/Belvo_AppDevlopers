import React from "react";
import { View, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../theme";

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  title: string;
  subtitle: string;
};

export default function ActivityCard({
  icon,
  color,
  title,
  subtitle,
}: Props) {
  return (
    <View
      className="rounded-2xl p-5 border mt-4"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
    >
      <View className="flex-row items-center">

        <Ionicons
          name={icon}
          size={24}
          color={color}
        />

        <View className="ml-3">
          <Text
            className="font-semibold"
            style={{ color: colors.text }}
          >
            {title}
          </Text>

          <Text
            className="text-sm mt-1"
            style={{ color: colors.textMuted }}
          >
            {subtitle}
          </Text>
        </View>

      </View>
    </View>
  );
}