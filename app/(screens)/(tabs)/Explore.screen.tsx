import Icons from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { Link } from "expo-router";

import React from "react";
import {
  FlatList,
  Image,
  Pressable,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

export default function ExploreScreen() {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <View className="flex-col w-full flex-1">
      <FlatList
        data={Array.from({ length: 10 })}
        renderItem={({ item, index }) => (
          <ReelsRow index={index} screenWidth={screenWidth} />
        )}
      />
    </View>
  );
}

const ReelsRow = ({
  index,
  screenWidth,
}: {
  index: number;
  screenWidth: number;
}) => {
  // Calculate dimensions using full screen width
  const availableWidth = screenWidth;

  // Video takes 1/3, Posts take 2/3
  const videoWidth = availableWidth / 3;
  const postsWidth = (availableWidth * 2) / 3;
  const postItemWidth = postsWidth / 2; // Each post is 1/2 of posts area

  return (
    <View className="flex-col w-full">
      <View
        className={cn("w-full flex-row", {
          "": index % 2 === 0,
          "flex-row-reverse": index % 2 === 1,
        })}
      >
        {/* 4 Posts Grid - 2/3 width */}
        <View className="flex flex-col" style={{ width: postsWidth }}>
          <View className="flex flex-row">
            <FeedBox width={postItemWidth} />
            <FeedBox width={postItemWidth} />
          </View>
          <View className="flex flex-row">
            <FeedBox width={postItemWidth} />
            <FeedBox width={postItemWidth} />
          </View>
        </View>

        {/* 1 Video - 1/3 width */}
        <VideoBox width={videoWidth} />
      </View>
    </View>
  );
};

const FeedBox = ({ width }: { width: number }) => {
  const { width: screenWidth } = useWindowDimensions();

  return (
    <TouchableOpacity className="relative">
      <Link href="/(screens)/(tabs)/Reels.screen" asChild>
        <Link.Trigger>
          <Pressable>
            <View
              className=" relative p-[1px]"
              style={{ width: width, height: width }}
            >
              <Image
                style={{ width: "100%", height: "100%" }}
                source={require("@/assets/images/post.jpg")}
              />
              <View className="absolute z-10 right-2 top-2">
                <Icons name="Copy" />
              </View>
            </View>
          </Pressable>
        </Link.Trigger>
        <Link.Preview height={screenWidth} width={screenWidth}>
          <Image
            source={require("@/assets/images/post.jpg")}
            style={{ width: "100%", height: "100%" }}
          />
        </Link.Preview>
        <Link.Menu>
          <Link.MenuAction title="Like" icon={"heart"} onPress={() => {}} />
          <Link.MenuAction
            title="Share"
            icon={"paperplane"}
            onPress={() => {}}
          />
          <Link.MenuAction
            title="View Profile"
            icon={"person.crop.circle"}
            onPress={() => {}}
          />
          <Link.MenuAction
            title="Repost"
            icon={"arrow.2.squarepath"}
            onPress={() => {}}
          />
          <Link.MenuAction
            title="Not interested"
            icon={"eye.slash"}
            onPress={() => {}}
          />
          <Link.MenuAction
            title="Report"
            icon={"exclamationmark.bubble"}
            onPress={() => {}}
            destructive
          />
        </Link.Menu>
      </Link>
    </TouchableOpacity>
  );
};

const VideoBox = ({ width }: { width: number }) => {
  return (
    <View
      className="relative p-[1px]"
      style={{ width: width, height: width * 2 }} // Double height to match posts grid height
    >
      <Image
        source={require("@/assets/images/post.jpg")}
        style={{ width: "100%", height: "100%" }}
      />
      <View className="absolute z-10 right-2 top-2">
        <Icons name="Youtube" />
      </View>
    </View>
  );
};
