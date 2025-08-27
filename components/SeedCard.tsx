import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";
import Icons from "./ui/icons";

const defaultDataWith6Colors = [
  {
    image: "https://picsum.photos/430",
    title: "Güzel Manzara",
    description: "Doğanın büyüleyici güzelliği",
  },
  {
    image: "https://picsum.photos/430",
    title: "Şehir Hayatı",
    description: "Modern yaşamın dinamik ritmi",
  },
  {
    image: "https://picsum.photos/430",
    title: "Sanat Eseri",
    description: "Yaratıcılığın sınırsız ifadesi",
  },
];
const PAGE_WIDTH = 430;
export default function SeedCard() {
  const [isMore, setIsMore] = React.useState(false);
  const progress = useSharedValue<number>(0);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const baseOptions = {
    vertical: false,
    width: PAGE_WIDTH,
    height: PAGE_WIDTH * 0.6,
  } as const;

  const ref = React.useRef<ICarouselInstance>(null);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View className="w-full h-full gap-2">
      <View className="absolute top-4 right-4 z-10 bg-zinc-800/25 py-1 px-2 rounded-full">
        <Text className="text-white text-sm">
          {currentIndex + 1}/{defaultDataWith6Colors.length}
        </Text>
      </View>
      <Carousel
        ref={ref}
        {...baseOptions}
        onProgressChange={(_, absoluteProgress) => {
          progress.value = absoluteProgress;
          setCurrentIndex(Math.round(absoluteProgress));
        }}
        loop={false}
        style={{ width: "100%" }}
        data={defaultDataWith6Colors}
        renderItem={({ item, index }) => {
          return (
            <Image
              key={index}
              source={{ uri: item.image }}
              className="w-full h-full"
            />
          );
        }}
      />
      <Pagination.Basic<{ color: string }>
        progress={progress}
        data={defaultDataWith6Colors.map((item) => ({ color: item.image }))}
        size={6}
        dotStyle={{
          borderRadius: 100,
          backgroundColor: "#f1f1f1",
        }}
        activeDotStyle={{
          borderRadius: 100,
          overflow: "hidden",
          backgroundColor: "#3b82f6",
        }}
        containerStyle={[
          {
            gap: 5,
            marginBottom: 10,
          },
        ]}
        horizontal
        onPress={onPressPagination}
      />

      {/* Dynamic Text Content */}
      <View className="px-2 gap-2">
        <View className="flex flex-row justify-between">
          <View className="flex-row gap-3">
            <View className="flex-row items-center gap-2">
              <Pressable>
                <Icons name="Heart" size={20} color="black" />
              </Pressable>
              <Pressable>
                <Text className="text-sm font-semibold">27.5K</Text>
              </Pressable>
            </View>

            <View className="flex-row items-center gap-2">
              <Pressable>
                <Icons name="Repeat" size={20} color="black" />
              </Pressable>
              <Pressable>
                <Text className="text-sm font-semibold">5K</Text>
              </Pressable>
            </View>

            <View className="flex-row items-center gap-2">
              <Pressable>
                <Icons name="Send" size={20} color="black" />
              </Pressable>
              <Pressable>
                <Text className="text-sm font-semibold">500</Text>
              </Pressable>
            </View>
          </View>

          <View>
            <Pressable>
              <Icons name="Bookmark" size={20} color="black" />
            </Pressable>
          </View>
        </View>

        <View className="flex flex-row ">
          <Text className="text-wrap items-center flex-row">
            <Text className="font-medium">username</Text>{" "}
            {isMore ? "description ".repeat(10) : "description ".repeat(3)}...
         {" "}

            <Text onPress={() => setIsMore(!isMore)} className="text-zinc-500">{isMore ? "less" :"more"}</Text>

          </Text>
        </View>
        <View>
          <Text className="text-zinc-500">August 17</Text>
        </View>
      </View>
    </View>
  );
}
