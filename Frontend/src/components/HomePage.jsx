import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="container mx-auto text-center p-4 bg-gray-100 rounded-md shadow-lg">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz App!</h1>
      <p className="text-lg mb-4">Test your knowledge with various quizzes!</p>
      <div className="space-x-4">
        <Link
          to="/quizzes"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
        >
          Take a Quiz
        </Link>
        <Link
          to="/leaderboard"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          View Leaderboard
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default HomePage;
