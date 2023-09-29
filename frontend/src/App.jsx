//.src/App.jsx
import { useState } from "react";
import "./App.css";
import { login } from "./services/auth.service";
import useAuthStore from './stores/authStore';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setToken = useAuthStore((state) => state.setToken);
  const token = useAuthStore((state) => state.token);
  const clearToken = useAuthStore((state) => state.clearToken);

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      if (response) {
        setToken(response.token);
      }
    } catch (error) {
      console.error('Failed to login:', error);
    }
  };

  const handleLogout = () => {
    clearToken();
  };

  return (
    <div>
      <h1> Home </h1>
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
      <button onClick={handleLogout}>Logout</button>
      {token ? <h3>Logged In</h3> : <h3>Not Logged In</h3>}
    </div>
  );
}

export default App;
// end of .src/App.jsx
