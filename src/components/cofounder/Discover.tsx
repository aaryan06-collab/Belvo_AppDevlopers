import React from "react";
import { View } from "react-native";
import FounderProfileCard from "./FounderProfileCard";
import GreenFlagPromptCard from "./GreenFlagPromptCard";
import ActionButtons from "./ActionButtons";


export default function Discover() {
  return (
    <View className="mt-5 pb-8">
      <FounderProfileCard />
      <GreenFlagPromptCard />
      <ActionButtons />
    </View>
  );
}
