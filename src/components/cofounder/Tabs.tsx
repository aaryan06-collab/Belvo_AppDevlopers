import React, { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { colors } from "../../theme";

interface TabsProps {
  onClick: (tab: "discover" | "matches") => void;
  tab?: "discover" | "matches";
}

const Tabs: FC<TabsProps> = ({ onClick, tab }: TabsProps) => {
  const discoverActive = tab === "discover";
  const matchesActive = tab === "matches";

  return (
    <View
      className="flex-row rounded-full p-1 border"
      style={{
        backgroundColor: "#FFFFFF",
        borderColor: colors.border,
      }}
    >
      <Pressable
        onPress={onClick.bind(null, "discover")}
        className="items-center flex-1 p-3 justify-center rounded-full"
        style={discoverActive ? { backgroundColor: colors.success } : undefined}
      >
        <Text
          className="font-semibold"
          style={{ color: discoverActive ? "#FFFFFF" : colors.textMuted }}
        >
          Discover
        </Text>
      </Pressable>
      <Pressable
        onPress={onClick.bind(null, "matches")}
        className="items-center flex-1 p-3 justify-center rounded-full"
        style={matchesActive ? { backgroundColor: colors.success } : undefined}
      >
        <Text
          className="font-semibold"
          style={{ color: matchesActive ? "#FFFFFF" : colors.textMuted }}
        >
          Matches (3)
        </Text>
      </Pressable>
    </View>
  );
};

export default Tabs;
