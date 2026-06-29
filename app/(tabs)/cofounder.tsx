import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CoFounderScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerClassName="p-6 flex-grow justify-center items-center">
        <Text className="text-2xl font-bold text-black">CoFounder Match</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
