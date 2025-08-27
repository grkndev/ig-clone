import React from "react";
import { FlatList, View } from "react-native";
import StoryCard from "./StoryCard";

export default function Stories() {
  return (
    <View className="flex-row gap-4 px-4">
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <StoryCard name={item.name} image={item.image} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
}

const stories = Array.from({ length: 10 }, (_, index) => ({
  name: `Story ${index}`,
  id: index,
  image: `https://github.com/shadcn.png`,
}));
