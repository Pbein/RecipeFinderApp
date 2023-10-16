// src/pages/Register.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./Register.css";
import { register } from "../services/auth.service";
import useAuthStore from "../stores/authStore";

function Register() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);

  const handleRegister = async () => {
    try {
      const response = await register({ username, email, password });
      if (response && response.token) {
        setToken(response.token);
        setUser(response);
        // Navigate to Dashboard after successful registration
        navigate("/dashboard");
      } else {
        // Optionally handle unsuccessful registration here, for example by setting an error state.
      }
    } catch (error) {
      console.error("Failed to register:", error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        placeholder="name"
        type="text"
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        placeholder="email"
        type="text"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        onChange={(event) => setPassword1(event.target.value)}
      />
      <input
        placeholder="confirm password"
        type="password"
        onChange={(event) => setPassword2(event.target.value)}
      />
      <button onClick={handleRegister} disabled={password !== password2}>Register</button>
    </div>
  );
}

export default Register;
// end of src/pages/Register.js