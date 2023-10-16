// src/pages/Login.jsx
import useLogin from "../hooks/useLogin";

function Login() {
  const { email, setEmail, password, setPassword, handleLogin } = useLogin();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-white text-3xl mb-4 font-semibold text-center">Login</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button 
          onClick={handleLogin}
          className="w-full p-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
