import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./components/HomePage";
import QuizList from "./components/QuizList";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";
import Logout from "./pages/Logout";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Quizzes" component={QuizList} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
        <Stack.Screen name="Logout" component={Logout} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
