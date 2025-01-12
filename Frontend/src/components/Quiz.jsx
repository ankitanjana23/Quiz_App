import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const questions = [
  { id: 1, question: "What is the capital of France?", options: ["Paris", "London", "Berlin", "Rome"], answer: "Paris" },
  { id: 2, question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
];

export default function Quiz({ route }) {
  const { quizId } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert(`Quiz completed! Your score: ${score}/${questions.length}`);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-4/5 bg-white p-6 rounded-lg shadow">
        <Text className="text-xl font-bold mb-4">{questions[currentQuestion].question}</Text>
        {questions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleAnswer(option)}
            className="bg-blue-500 rounded px-4 py-2 mb-4"
          >
            <Text className="text-white text-center">{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
