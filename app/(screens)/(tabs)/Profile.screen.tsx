import Stories from "@/components/Stories";
import StoryCard from "@/components/StoryCard";
import Icons from "@/components/ui/icons";
import React from "react";
import { Linking, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white px-4">
      <ProfileHeader />

      <View className="flex-col items-start justify-center gap-3">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum?
        </Text>
        <View>
          <TouchableOpacity
            className="flex-row items-center gap-1 text-blue-500"
            onPress={() => {
              Linking.openURL("https://www.google.com");
            }}
          >
            <Icons name="Link" size={16} color="blue" />
            <Text className="text-[#0000FF]">Link</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="flex-row gap-4 w-full">
        <TouchableOpacity className="bg-zinc-200 p-2 rounded-md flex-1 items-center justify-center">
          <Text>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="bg-zinc-200 p-2 rounded-md items-center flex-1 justify-center">
          <Text>Share Profile</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Stories />
      </View>
      <View className="flex-1 bg-red-500 w-full">
        <Text>Posts</Text>
      </View>
    </View>
  );
}

function ProfileHeader() {
  return (
    <View className="flex-row items-center justify-center gap-4">
      <StoryCard
        id={0}
        name={"My Story"}
        image={"https://github.com/shadcn.png"}
        isViewed={false}
        story_url={"https://www.instagram.com/"}
        isMyStory={true}
        size={96}
        showName={false}
        plusIconSize={16}
      />
      <View className="flex-col items-start justify-center gap-3 flex-1">
        <Text className="font-semibold">grkndev</Text>
        <View className="flex-row items-center justify-between w-full">
          <View className="flex-col items-start justify-center gap-1">
            <Text className="font-semibold">100</Text>
            <Text>posts</Text>
          </View>
          <View className="flex-col items-start justify-center gap-1">
            <Text className="font-semibold">100</Text>
            <Text>followers</Text>
          </View>
          <View className="flex-col items-start justify-center gap-1">
            <Text className="font-semibold">100</Text>
            <Text>following</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
