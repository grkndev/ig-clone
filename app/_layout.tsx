import { useSafeAreaInsets } from "react-native-safe-area-context";
import "../global.css";

import { PortalHost } from "@rn-primitives/portal";
import { Stack } from "expo-router";
import { View } from "react-native";

export default function RootLayout() {
  const insets = useSafeAreaInsets();
  return (
    <View className="flex-1 bg-white" style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Stack screenOptions={{ headerShown: false }} />
      <PortalHost />
    </View>
  );
}
