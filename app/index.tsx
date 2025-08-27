import { Link } from "expo-router";
import { FlatList, Pressable, Text, View } from "react-native";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Root Router</Text>
      <FlatList
        data={["Home", "Profile", "Settings"]}
        keyExtractor={(item) => item}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => (
          <Link href={`/${item}.screen` as any} asChild>
            <Pressable className="p-4 bg-zinc-200 rounded-lg w-full items-center">
              <Text>{item}</Text>
            </Pressable>
          </Link>
        )}
      />
    </View>
  );
}
