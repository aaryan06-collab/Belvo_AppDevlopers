import React, { FC } from "react";
import { View, Text, Pressable } from "react-native";
import { colors } from "../../theme";
import Ionicons from "@expo/vector-icons/Ionicons";

interface ActionButtonsProps {
  // Your prop types here
}

const ActionButtons: FC<ActionButtonsProps> = (props) => {
  return (
    <View className="flex-row mt-4 justify-center items-center space-x-4">

      {/* ActionButtons */}
      <Pressable className="bg-red-50 p-4 rounded-md">
       <Ionicons
              name="close-outline"
              size={22}
              color={colors.text}
            />
      </Pressable>
      <Pressable className="bg-yellow-50 p-4 rounded-md">
       <Ionicons
              name="star-outline"
              size={22}
              color={colors.text}
            />
      </Pressable>
      <Pressable className="bg-green-500 p-4 rounded-md">
       <Ionicons
              name="heart-outline"
              size={22}
              color={colors.text}
            />
      </Pressable>
    </View>
  );
};

export default ActionButtons;
