import TabBarComponent from "@/components/ui/tabbar";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ tabBarActiveTintColor: "blue", headerShown: false }}
      tabBar={(props) => <TabBarComponent {...props} />}
    />
  );
}
