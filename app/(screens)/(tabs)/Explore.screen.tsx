  import { FeedBox, VideoBox } from "@/components/Feed";
import { cn } from "@/lib/utils";
import React from "react";
import {
  FlatList,
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

