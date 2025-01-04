import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        localStorage.removeItem("token");
        navigate("/");
      } catch (error) {
        console.error("Error during logout:", error);
        alert("An error occurred during logout.");
      }
    };

    logout();
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Logout;
