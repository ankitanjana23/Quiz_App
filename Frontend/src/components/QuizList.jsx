import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const QuizList = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/quizzes");
        if (!response.ok) throw new Error("Failed to fetch quizzes");
        const data = await response.json();
        setQuizzes(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQuizzes();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!quizzes.length) return <div>No quizzes available</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Quiz List</h1>
      <Link
        to={`/home`}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"
          >
        Back
      </Link>
      <ul className="space-y-4">
        {quizzes.map((quiz) => (
          <li key={quiz._id} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-bold">{quiz.title}</h2>
            <div className="flex space-x-4 mt-4">
              <Link
                to={`/quiz/${quiz._id}`}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Take Quiz
              </Link>
              <Link
                to={`/leaderboard/${quiz._id}`}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                View Leaderboard
              </Link>
            </div>
          </li>
        ))}
      </ul>
      

    </div>
  );
};

export default QuizList;
