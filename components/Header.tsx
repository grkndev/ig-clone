import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icons from "./ui/icons";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center p-4">
      <Text className="text-2xl font-bold">Instagram</Text>
      <View className="flex-row gap-4">
        <TouchableOpacity>
          <Icons name="Heart" color="black" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons name="MessageCircle" color="black" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
