// src/hooks/useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import useAuthStore from "../stores/authStore";

function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      if (response && response.token) {
        setToken(response.token);
        setUser(response);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin
  };
}

export default useLogin;
