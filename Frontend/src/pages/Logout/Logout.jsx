import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Logout() {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Clear any stored user data if necessary
    navigation.navigate("Login");
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-4/5 bg-white p-6 rounded-lg shadow">
        <Text className="text-2xl font-bold text-center mb-6">Logout</Text>
        <TouchableOpacity
          onPress={handleLogout}
          className="bg-red-500 rounded px-4 py-2"
        >
          <Text className="text-white text-center">Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
