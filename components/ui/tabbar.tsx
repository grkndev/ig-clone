import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { Keyboard, TouchableOpacity, View } from "react-native";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import Icons from "./icons";

const TabBarComponent = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener("keyboardDidShow", () => {
      setKeyboardVisible(true);
    });
    const keyboardHideListener = Keyboard.addListener("keyboardDidHide", () => {
      setKeyboardVisible(false);
    });

    // Cleanup
    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  const currentRoute = state.routes[state.index].name;
  return (
    <>
      {!isKeyboardVisible && (
        <View className="border-zinc-100 border-t bg-white flex flex-row items-center justify-center w-full h-12">
          {/* HOME */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Home.screen")}
            className={`flex h-full w-1/5 items-center justify-center $`}
          >
            <Icons
              name={"House"}
              color={currentRoute === "Home.screen" ? "#000" : "#a1a1aa"}
            />
          </TouchableOpacity>

          {/* EXPLORE */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Explore.screen")}
            className={`flex h-full w-1/5 items-center justify-center`}
          >
            <Icons
              name={"Search"}
              color={currentRoute === "Explore.screen" ? "#000" : "#a1a1aa"}
            />
          </TouchableOpacity>

          {/* NEW FEED */}
          <TouchableOpacity
            onPress={() => navigation.navigate("NewFeed.screen")}
            className={`flex h-full w-1/5 items-center justify-center`}
          >
            <Icons
              name={"SquarePlus"}
              color={currentRoute === "NewFeed.screen" ? "#000" : "#a1a1aa"}
            />
          </TouchableOpacity>

          {/* REELS */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Reels.screen")}
            className={`flex h-full w-1/5 items-center justify-center`}
          >
            <Icons
              name={"Youtube"}
              color={currentRoute === "Reels.screen" ? "#000" : "#a1a1aa"}
            />
          </TouchableOpacity>

          {/* PROFILE */}
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile.screen")}
            className={` flex h-full w-1/5 items-center justify-center`}
          >
            <Avatar alt="user-avatar">
              <AvatarImage source={{ uri: "https://github.com/shadcn.png" }} />
              <AvatarFallback>
                <Icons name="User" size={24} color="white" />
              </AvatarFallback>
            </Avatar>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default TabBarComponent;
