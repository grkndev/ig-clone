import { Link } from "expo-router";
import { Image, Pressable, TouchableOpacity, View, useWindowDimensions } from "react-native";
import Icons from "./ui/icons";

export const FeedBox = ({ width }: { width: number }) => {
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
  
  export const VideoBox = ({ width }: { width: number }) => {
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
  