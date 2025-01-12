import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const quizzes = [
  { id: 1, name: "General Knowledge" },
  { id: 2, name: "Science Trivia" },
  { id: 3, name: "History Challenge" },
];

export default function QuizList() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-4/5 bg-white p-6 rounded-lg shadow">
        <Text className="text-2xl font-bold text-center mb-6">Quizzes</Text>
        {quizzes.map((quiz) => (
          <TouchableOpacity
            key={quiz.id}
            onPress={() => navigation.navigate("Quiz", { quizId: quiz.id })}
            className="bg-blue-500 rounded px-4 py-2 mb-4"
          >
            <Text className="text-white text-center">{quiz.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
