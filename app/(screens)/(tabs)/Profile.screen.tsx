import { FeedBox } from "@/components/Feed";
import Stories from "@/components/Stories";
import StoryCard from "@/components/StoryCard";
import Icons from "@/components/ui/icons";
import React from "react";
import {
  FlatList,
  Linking,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions
} from "react-native";

export default function ProfileScreen() {
  const { width: screenWidth } = useWindowDimensions();
  
  // Calculate item width: (screenWidth - padding - gaps) / 3
  // px-4 = 16px on each side, so total padding = 32px
  // 2 gaps between 3 items = 2px
  const itemWidth = (screenWidth - 32 - 2) / 3;
  
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={Array.from({ length: 12 })}
        numColumns={3}
        columnWrapperStyle={{ gap: 1 }}
        ItemSeparatorComponent={() => <View style={{ height: 1 }} />}
        ListHeaderComponent={<ProfileContent />}
        renderItem={({ item, index }) => (
          <FeedBox width={itemWidth} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
}

function ProfileContent() {
  return (
    <View className="items-center justify-center gap-4 pb-4">
      <ProfileTab />
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
      <View className="flex-row gap-2 w-full">
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

function ProfileTab() {
  return (
    <TouchableOpacity onPress={() => {
      console.log("test")
    }}>
      <View className="w-full pt-2 flex-row items-center justify-between">
      <View className="flex-row items-center gap-2">
        <Icons name="Lock" size={24} color="black" />
        <Text className="font-bold text-xl">grkndev</Text>
        <Icons name="ChevronDown" size={24} color="black" />
      </View>
      <View className="flex-row items-center gap-4">
        <TouchableOpacity onPress={() => {}}>
          <Icons name="SquarePlus" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Icons name="Menu" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
    </TouchableOpacity>
  );
}
