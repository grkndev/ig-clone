import Header from "@/components/Header";
import SeedCard from "@/components/SeedCard";
import Stories from "@/components/Stories";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icons from "@/components/ui/icons";
import React from "react";
import { Pressable, Text, View } from "react-native";


export default function HomeScreen() {
  
  return (
    <View className="flex-1 bg-white gap-2">
      <Header />
      <Stories />

      <View className="mt-2 gap-2">
        {/* Header */}
        <View className="flex-row items-center justify-between px-4">
          <View className="flex-row items-center gap-3">
            <Avatar alt="user-avatar">
              <AvatarImage source={{ uri: "https://github.com/shadcn.png" }} />
              <AvatarFallback>
                <Icons name="User" size={24} color="white" />
              </AvatarFallback>
            </Avatar>
            <Text>Username</Text>
          </View>
          <Pressable onPress={() => {}} className="p-1">
            <Icons name="EllipsisVertical" size={18} color="black" />
          </Pressable>
        </View>
        {/* Content */}
        <View>

            <SeedCard />

        </View>
        {/* Actions */}
        <View></View>
        {/* Footer */}
        <View></View>
      </View>
    </View>
  );
}
