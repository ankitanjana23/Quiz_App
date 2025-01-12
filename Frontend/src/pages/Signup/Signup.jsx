import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { API_BASE_URL } from "../utils/fetchConfig";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleSignup = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (data.success) {
        Alert.alert("Signup successful!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Signup failed!", data.message || "Try again.");
      }
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <View className="w-4/5 bg-white p-6 rounded-lg shadow">
        <Text className="text-2xl font-bold text-center mb-6">Signup</Text>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          className="border rounded px-4 py-2 mb-4"
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          className="border rounded px-4 py-2 mb-4"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          className="border rounded px-4 py-2 mb-4"
        />
        <TouchableOpacity
          onPress={handleSignup}
          className="bg-green-500 rounded px-4 py-2"
        >
          <Text className="text-white text-center">Signup</Text>
        </TouchableOpacity>
        <Text className="text-center mt-4">
          Already have an account?{" "}
          <Text
            className="text-blue-500"
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}
