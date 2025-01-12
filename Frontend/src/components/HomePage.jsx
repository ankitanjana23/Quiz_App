import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-4/5 bg-white p-6 rounded-lg shadow">
        <Text className="text-2xl font-bold text-center mb-6">Home Page</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Quizzes")}
          className="bg-blue-500 rounded px-4 py-2 mb-4"
        >
          <Text className="text-white text-center">Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Leaderboard")}
          className="bg-green-500 rounded px-4 py-2"
        >
          <Text className="text-white text-center">Leaderboard</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
