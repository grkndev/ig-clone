import { SeedData } from '@/app/(screens)/(tabs)/Home.screen'
import React from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import SeedCard from './SeedCard'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Icons from './ui/icons'

export default function Seed({ data }: { data: SeedData }) {
  const [isMore, setIsMore] = React.useState(false);

  return (
    <View className="py-2 gap-2">
    {/* Header */}
    <View className="flex-row items-center justify-between px-4">
      <View className="flex-row items-center gap-3">
        <Avatar alt="user-avatar">
          <AvatarImage source={{ uri: data.user.avatar }} />
          <AvatarFallback>
            <Icons name="User" size={24} color="white" />
          </AvatarFallback>
        </Avatar>
        <Text>{data.user.username}</Text>
      </View>
      <Pressable onPress={() => {}} className="p-1">
        <Icons name="EllipsisVertical" size={18} color="black" />
      </Pressable>
    </View>
    {/* Content */}
    <View className="flex ">
      <SeedCard data={data.content} />
    </View>
    {/* Actions */}
    <View className="px-4">
      <View className="flex flex-row justify-between">
        <View className="flex-row gap-3">
          <View className="flex-row items-center gap-2">
            <TouchableOpacity>
              <Icons name="Heart" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-sm font-semibold">27.5K</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center gap-2">
            <TouchableOpacity>
              <Icons name="MessageCircle" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-sm font-semibold">7K</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center gap-2">
            <TouchableOpacity>
              <Icons name="Repeat" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-sm font-semibold">5K</Text>
            </TouchableOpacity>
          </View>

          <View className="flex-row items-center gap-2">
            <TouchableOpacity>
              <Icons name="Send" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Text className="text-sm font-semibold">500</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Icons name="Bookmark" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    {/* Footer */}
    <View className="px-4">
      <View className="flex flex-row ">
        <Text className="text-wrap items-center flex-row">
          <Text className="font-medium">username</Text>{" "}
          {isMore ? "description ".repeat(10) : "description ".repeat(3)}...{" "}
          <Text
            onPress={() => setIsMore(!isMore)}
            className="text-zinc-500"
          >
            {isMore ? "less" : "more"}
          </Text>
        </Text>
      </View>
      <View>
        <Text className="text-zinc-500">August 17</Text>
      </View>
    </View>
  </View>
  )
}