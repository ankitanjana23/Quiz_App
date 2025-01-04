import React, { useEffect, useState } from "react";
import { useParams,Link } from "react-router-dom";

const Quiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/quizzes/${id}`);
        if (!response.ok) throw new Error("Failed to fetch quiz data");
        const data = await response.json();
        setQuiz(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchQuiz();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!quiz) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">{quiz.title}</h1>
      <Link
        to={`/quizzes`}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"
          >
        Back
      </Link>
      {quiz.questions.map((question, index) => (
        <div key={question._id} className="mb-4">
          <h2 className="text-xl font-bold">
            Q{index + 1}: {question.question}
          </h2>
          <ul>
            {question.options.map((option, i) => (
              <li key={i}>{option}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
