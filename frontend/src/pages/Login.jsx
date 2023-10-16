//.src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Login.css";
import { login } from "../services/auth.service";
import useAuthStore from "../stores/authStore";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  //   const token = useAuthStore((state) => state.token);
  //   const clearToken = useAuthStore((state) => state.clearToken);

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      console.log("response", response);
      if (response && response.token) {
        setToken(response.token);
        setUser(response);
        
        // Navigate to Dashboard after successful login
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Failed to login:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        placeholder="email"
        type="text"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
// end of .src/pages/Login.jsx
