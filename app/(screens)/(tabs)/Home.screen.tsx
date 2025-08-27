import Header from "@/components/Header";
import Seed from "@/components/Seed";
import Stories from "@/components/Stories";
import React from "react";
import { FlatList, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView
      className="flex-1 bg-white gap-2"
      showsVerticalScrollIndicator={false}
    >
      <Header />
      <Stories />

      <FlatList
        scrollEnabled={false}
        data={Array(10).fill(seedData)}
        renderItem={({ item }) => <Seed data={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </ScrollView>
  );
}

export type SeedData = {
  id: number;
  user: {
    id: number;
    username: string;
    avatar: string;
  };
  content: string[];
  createdAt: string;
  likes: number;
  comments: number;
  shares: number;
};

const seedData: SeedData = {
  id: 1,
  user: {
    id: 14563454353,
    username: "username",
    avatar: "https://github.com/shadcn.png",
  },
  content: [
    "https://picsum.photos/430",
    "https://picsum.photos/430",
    "https://picsum.photos/430",
  ],
  createdAt: "2021-01-01",
  likes: 100,
  comments: 100,
  shares: 100,
};
