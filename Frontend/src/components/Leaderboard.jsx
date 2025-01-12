import React from "react";
import { View, Text } from "react-native";

const leaderboard = [
  { id: 1, name: "Alice", score: 95 },
  { id: 2, name: "Bob", score: 90 },
  { id: 3, name: "Charlie", score: 85 },
];

export default function Leaderboard() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-4/5 bg-white p-6 rounded-lg shadow">
        <Text className="text-2xl font-bold text-center mb-6">Leaderboard</Text>
        {leaderboard.map((entry) => (
          <View key={entry.id} className="flex-row justify-between mb-4">
            <Text>{entry.name}</Text>
            <Text>{entry.score}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
