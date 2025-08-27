import { SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Stack screenOptions={{ headerShown: false }} />;
    </SafeAreaView>
  );
}
