import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { AvatarFallback, AvatarImage, StoryAvatar } from "./ui/avatar";
import Icons from "./ui/icons";

type StoryCardProps = {
  name: string;
  image: string;
};

export default function StoryCard({ name, image }: StoryCardProps) {
  return (
    <TouchableOpacity className="flex-col items-center gap-2" onPress={() => {}}>
      <StoryAvatar size={80} hasStory={true} isViewed={false}>
        <AvatarImage
          source={{ uri: image }}
          className="w-full h-full"
        />
        <AvatarFallback>
          <Icons name="User" size={24} color="white" />
        </AvatarFallback>
      </StoryAvatar>
      <Text className="text-sm">{name}</Text>
    </TouchableOpacity>
  );
}
