import Header from "@/components/Header";
import Stories from "@/components/Stories";
import React from "react";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <Header />
      <Stories />
    </View>
  );
}
