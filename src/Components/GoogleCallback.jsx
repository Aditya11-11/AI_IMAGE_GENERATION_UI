// src/pages/GoogleCallback.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    const userId = params.get("user_id");
    const userName = params.get("user_name");

    if (token && userId) {
      // ✅ Store in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user_id", userId);
      if (userName) localStorage.setItem("user_name", userName);

      // ✅ Redirect to dashboard
      navigate("/dashboard");
    } else {
      // ❌ Missing data — redirect to login
      navigate("/login");
    }
  }, [navigate]);

  return <p>Logging you in with Google...</p>;
};

export default GoogleCallback;
