import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../src/components/cofounder/Header";
import { colors } from "../../src/theme";
import Tabs from "../../src/components/cofounder/Tabs";
import Discover from "../../src/components/cofounder/Discover";
import Matches from "../../src/components/cofounder/Matches";

export default function CoFounderScreen() {
  const [tab, setTab] = React.useState<"discover" | "matches">("discover");
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: colors.background }}
    >
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20, paddingBottom: 96 }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <Tabs onClick={(tab) => setTab(tab)} tab={tab} />
        {tab === "discover" ? <Discover /> : <Matches />}
      </ScrollView>
    </SafeAreaView>
  );
}
