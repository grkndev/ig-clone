import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";

import Icons from "./ui/icons";
import { StoryAvatar } from "./ui/story-avatar";

type StoryCardProps = {
  id: number;
  name: string;
  image: string;
  isViewed: boolean;
  story_url: string;
  isMyStory: boolean;
};

export default function StoryCard(props: StoryCardProps) {
  return (
    <TouchableOpacity
      className="flex-col items-center gap-0"
      onPress={() => {
        Linking.openURL(props.story_url);
      }}
    >
      <StoryAvatar size={80} hasStory={!props.isMyStory} isViewed={props.isViewed} image_url={props.image} />
       {
        props.isMyStory ? (
          <View className="absolute bottom-6 border-2 border-white right-0 bg-blue-500 rounded-full p-1">
            <Icons name="Plus" size={16} color="white" />
          </View>
        ) : null
       }
     
      <Text className="text-sm">{props.isMyStory ? "My Story" : props.name}</Text>
    </TouchableOpacity>
  );
}
