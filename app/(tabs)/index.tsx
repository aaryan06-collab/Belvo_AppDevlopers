
import React from "react";
import Statscard from "../../src/components/home/Statscard";
import SearchBar from "../../src/components/home/SearchBar";
import VerificationBanner from "../../src/components/home/VerificationBanner";
import ActivityCard from "../../src/components/home/ActivityCard";
import StartupCard from "../../src/components/home/StartupCard";
import { ScrollView, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import Header from "../../src/components/home/Header";
import { colors } from "../../src/theme";

export default function HomeScreen() {
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20 }}
      >
        {/* Header */}
        <Header />
        <SearchBar />
        <VerificationBanner />

        {/* Statistics */}
        <View className="flex-row justify-between mt-8">

          {/* Matches */}
          <View
            className="rounded-2xl w-[48%] p-5 border"
            style={{
              backgroundColor: colors.card,
              borderColor: colors.border,
            }}
          >
            <Ionicons
              name="people"
              size={28}
              color={colors.brand.warning}
            />

            <Text
              className="mt-3"
              style={{ color: colors.textMuted }}
            >
              Matches
            </Text>

            <Text
              className="text-3xl font-bold mt-2"
              style={{ color: colors.text }}
            >
              12
            </Text>
          </View>

          {/* Investors */}
          <View
            className="rounded-2xl w-[48%] p-5 border"
            style={{
              backgroundColor: colors.card,
              borderColor: colors.border,
            }}
          >
            <Ionicons
              name="wallet"
              size={28}
              color={colors.brand.success}
            />

            <Text
              className="mt-3"
              style={{ color: colors.textMuted }}
            >
              Investors
            </Text>

            <Text
              className="text-3xl font-bold mt-2"
              style={{ color: colors.text }}
            >
              5
            </Text>
          </View>

        </View>

        {/* Upcoming Events */}

        <View
          className="rounded-2xl p-5 mt-5 border"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
          }}
        >
          <Ionicons
            name="calendar"
            size={28}
            color={colors.brand.gold}
          />

          <Text
            className="mt-3"
            style={{ color: colors.textMuted }}
          >
            Upcoming Events
          </Text>

          <Text
            className="text-3xl font-bold mt-2"
            style={{ color: colors.text }}
          >
            18
          </Text>
        </View>

        {/* Quick Actions */}

        <Text
          className="text-xl font-bold mt-10 mb-4"
          style={{ color: colors.text }}
        >
          Quick Actions
        </Text>

        <View className="flex-row justify-between">

          <Pressable
            className="rounded-2xl p-5 w-[31%] items-center"
            style={{
              backgroundColor: colors.brand.gold,
            }}
          >
            <Ionicons
              name="people"
              size={28}
              color="white"
            />

            <Text className="text-white mt-2 font-semibold">
              Find
            </Text>
          </Pressable>

          <Pressable
            className="rounded-2xl p-5 w-[31%] items-center"
            style={{
              backgroundColor: colors.brand.gold,
            }}
          >
            <Ionicons
              name="wallet"
              size={28}
              color="white"
            />

            <Text className="text-white mt-2 font-semibold">
              Pitch
            </Text>
          </Pressable>

          <Pressable
            className="rounded-2xl p-5 w-[31%] items-center"
            style={{
              backgroundColor: colors.brand.gold,
            }}
          >
            <Ionicons
              name="location"
              size={28}
              color="white"
            />

            <Text className="text-white mt-2 font-semibold">
              Events
            </Text>
          </Pressable>

        </View>

        {/* Recent Activity */}

        <Text
          className="text-xl font-bold mt-10 mb-4"
          style={{ color: colors.text }}
        >
          Recent Activity
        </Text>
                {/* Activity Card 1 */}
        <View
          className="rounded-2xl p-5 border mt-2"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
          }}
        >
          <View className="flex-row items-center">
            <Ionicons
              name="checkmark-circle"
              size={24}
              color={colors.brand.success}
            />

            <View className="ml-3">
              <Text
                className="font-semibold"
                style={{ color: colors.text }}
              >
                Investor viewed your pitch
              </Text>

              <Text
                className="text-sm mt-1"
                style={{ color: colors.textMuted }}
              >
                2 minutes ago
              </Text>
            </View>
          </View>
        </View>

        {/* Activity Card 2 */}
        <View
          className="rounded-2xl p-5 border mt-4"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
          }}
        >
          <View className="flex-row items-center">
            <Ionicons
              name="person-add"
              size={24}
              color={colors.brand.gold}
            />

            <View className="ml-3">
              <Text
                className="font-semibold"
                style={{ color: colors.text }}
              >
                New co-founder matched
              </Text>

              <Text
                className="text-sm mt-1"
                style={{ color: colors.textMuted }}
              >
                1 hour ago
              </Text>
            </View>
          </View>
        </View>

        {/* Activity Card 3 */}
        <View
          className="rounded-2xl p-5 border mt-4 mb-10"
          style={{
            backgroundColor: colors.card,
            borderColor: colors.border,
          }}
        >
          <View className="flex-row items-center">
            <Ionicons
              name="megaphone"
              size={24}
              color={colors.error}
            />

            <View className="ml-3">
              <Text
                className="font-semibold"
                style={{ color: colors.text }}
              >
                Startup networking event tomorrow
              </Text>

              <Text
                className="text-sm mt-1"
                style={{ color: colors.textMuted }}
              >
                Hyderabad
              </Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}