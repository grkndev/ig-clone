import { cn } from "@/lib/utils";
import React from "react";
import { View } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Icons from "./icons";

interface StoryAvatarProps {
  size?: number;
  className?: string;
  image_url?: string;
  hasStory?: boolean;
  isViewed?: boolean;
}

export function StoryAvatar({
  size = 80,
  className,
  image_url,
  hasStory = true,
  isViewed = false,
  ...props
}: StoryAvatarProps) {
  const borderWidth = 3;
  const innerSize = size - borderWidth * 3;

  return (
    <View
      className={cn("relative items-center justify-center", className)}
      style={{ width: size, height: size }}
    >
      {hasStory && (
        <Svg width={size} height={size} className="absolute">
          <Defs>
            <LinearGradient
              id={isViewed ? "viewedGradient" : "storyGradient"}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              {isViewed ? [
                <Stop key="0" offset="0%" stopColor="#c3cad6" />,
                <Stop key="100" offset="100%" stopColor="#c3cad6" />
              ] : [
                <Stop key="0" offset="0%" stopColor="#833AB4" />,
                <Stop key="25" offset="25%" stopColor="#C13584" />,
                <Stop key="50" offset="50%" stopColor="#E1306C" />,
                <Stop key="75" offset="75%" stopColor="#FD1D1D" />,
                <Stop key="100" offset="100%" stopColor="#F77737" />
              ]}
            </LinearGradient>
          </Defs>
          <Circle
            cx={size / 2}
            cy={size / 2}
            r={(size - borderWidth) / 2}
            stroke={isViewed ? "url(#viewedGradient)" : "url(#storyGradient)"}
            strokeWidth={borderWidth}
            fill="transparent"
          />
        </Svg>
      )}

      <View
        className="absolute bg-white rounded-full"
        style={{
          width: innerSize,
          height: innerSize,
          padding: 2,
        }}
      >
        <Avatar
          className="w-full h-full"
          style={{ width: innerSize - 4, height: innerSize - 4 }}
          alt={image_url || "story-avatar"}
        >
          <AvatarImage source={{ uri: image_url }} />
          <AvatarFallback>
            <Icons name="User" size={24} color="white" />
          </AvatarFallback>
        </Avatar>
      </View>
    </View>
  );
}
