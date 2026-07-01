import React, { FC } from "react";
import { View, Text } from "react-native";
import { colors } from "../../theme";

interface LogoProps {
  // Your prop types here
}

const Logo: FC<LogoProps> = (props) => {
  return (
    <View>
      {/* Logo */}
      <Text
        className="text-center tracking-[4px] font-bold mb-6"
        style={{ color: colors.brand.gold }}
      >
        FOUNDERVERSE
      </Text>
    </View>
  );
};

export default Logo;
