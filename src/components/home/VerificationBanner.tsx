import React from "react";
import { View, Text, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../../theme";

export default function VerificationBanner() {
  return (
    <View
      className="rounded-2xl p-5 mt-6"
      style={{
        backgroundColor: colors.brand.goldLight,
      }}
    >
      <View className="flex-row items-center justify-between">

        <View className="flex-1">

          <Text
            className="font-bold text-lg"
            style={{ color: colors.text }}
          >
            Complete Verification
          </Text>

          <Text
            className="mt-2"
            style={{ color: colors.textMuted }}
          >
            Verify your profile to connect with investors and founders.
          </Text>

        </View>

        <Ionicons
          name="shield-checkmark"
          size={42}
          color={colors.brand.gold}
        />

      </View>

      <Pressable
        className="rounded-xl py-3 mt-4"
        style={{
          backgroundColor: colors.brand.gold,
        }}
      >
        <Text
          className="text-center font-bold text-white"
        >
          Verify Now
        </Text>
      </Pressable>

    </View>
  );
}