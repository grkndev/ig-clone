import React from "react";
import { FlatList, View } from "react-native";
import StoryCard from "./StoryCard";

export default function Stories() {
  return (
    <View className="flex-row gap-4 px-4">
        <StoryCard
            id={1}
            name={"My Story"}
            image={"https://github.com/shadcn.png"}
            isViewed={false}
            story_url={"https://www.instagram.com/"}
          />
      <FlatList
        data={stories}
        renderItem={({ item }) => (
          <StoryCard
            id={item.id}
            name={item.name}
            image={item.image}
            isViewed={item.isViewed}
            story_url={item.story_url}
          />
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
  isViewed: index % 2 === 0,
  story_url: `https://www.instagram.com/`,
}));
