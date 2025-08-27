import React from "react";
import { Linking, Text, TouchableOpacity } from "react-native";
import { AvatarFallback, AvatarImage, StoryAvatar } from "./ui/avatar";
import Icons from "./ui/icons";

type StoryCardProps = {
  id: number;
  name: string;
  image: string;
  isViewed: boolean;
  story_url: string;
};

export default function StoryCard(props: StoryCardProps) {
  return (
    <TouchableOpacity
      className="flex-col items-center gap-2"
      onPress={() => {
        Linking.openURL(props.story_url);
      }}
    >
      <StoryAvatar size={80} hasStory={true} isViewed={props.isViewed}>
        <AvatarImage
          source={{ uri: props.image }}
          className="w-full h-full"
        />
        <AvatarFallback>
          <Icons name="User" size={24} color="white" />
        </AvatarFallback>
      </StoryAvatar>
      <Text className="text-sm">{props.name}</Text>
    </TouchableOpacity>
  );
}
