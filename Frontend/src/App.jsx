import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import QuizList from "./components/QuizList";
import Quiz from "./components/Quiz";
import Leaderboard from "./components/Leaderboard";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Logout from "./pages/Logout/Logout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quiz/:id" element={<Quiz />} />
        <Route path="/leaderboard/:id" element={<Leaderboard />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </Router>
  );
}

export default App;