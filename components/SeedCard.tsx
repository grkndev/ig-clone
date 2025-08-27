import { SeedData } from "@/app/(screens)/(tabs)/Home.screen";
import React from "react";
import { Image, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";

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
export default function SeedCard({ data }: { data: SeedData["content"] }) {
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
    <View className="w-full gap-2">
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
          data={data}
        renderItem={({ item, index }) => {
          return (
            <Image
              key={index}
              source={{ uri: item }}
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

    </View>
  );
}
