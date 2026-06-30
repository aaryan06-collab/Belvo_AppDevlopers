import React from "react";
import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../theme";

type Props = {
  company: string;
  domain: string;
  funding: string;
};

export default function StartupCard({
  company,
  domain,
  funding,
}: Props) {
  return (
    <View
      className="rounded-2xl border p-5 mt-4"
      style={{
        backgroundColor: colors.card,
        borderColor: colors.border,
      }}
    >
      <View className="flex-row justify-between items-center">

        <View>

          <Text
            className="text-lg font-bold"
            style={{ color: colors.text }}
          >
            {company}
          </Text>

          <Text
            className="mt-1"
            style={{ color: colors.textMuted }}
          >
            {domain}
          </Text>

        </View>

        <Ionicons
          name="rocket"
          size={28}
          color={colors.brand.gold}
        />

      </View>

      <Text
        className="mt-4"
        style={{ color: colors.brand.success }}
      >
        {funding}
      </Text>

      <Pressable
        className="rounded-xl py-3 mt-5"
        style={{
          backgroundColor: colors.brand.gold,
        }}
      >
        <Text className="text-center text-white font-bold">
          View Startup
        </Text>
      </Pressable>
    </View>
  );
}