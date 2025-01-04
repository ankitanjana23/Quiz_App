import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Leaderboard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [leaderboard, setLeaderboard] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/leaderboard/${id}`);
        if (!response.ok) throw new Error("Failed to fetch leaderboard");
        const data = await response.json();
        setLeaderboard(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchLeaderboard();
  }, [id]);

  if (error) return <div>Error: {error}</div>;
  if (!leaderboard.length) return <div>No leaderboard data available</div>;

  return (
    <div className="container mx-auto p-4">
      <button
        onClick={() => navigate(`/quiz/${id}`)}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-4"
      >
        Back
      </button>
      <h1 className="text-3xl font-bold mb-6 text-center">Leaderboard</h1>
      <ol className="space-y-4">
        {leaderboard.map((entry, index) => (
          <li key={index} className="bg-white shadow-lg rounded-lg p-4">
            <p className="text-lg font-medium">
              {index + 1}. {entry.username}: {entry.score}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
