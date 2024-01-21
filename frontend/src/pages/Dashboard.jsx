// src/pages/Dashboard.js
import { Link } from "react-router-dom";
import useAuthStore from "../stores/authStore";
import useLogout from "../hooks/useLogout";

function Dashboard() {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    // If there's no token, redirect to HomePage or Login.
    window.location.href = "/";
  }

  return (
    <div className="bg-blue-900 min-h-screen p-6 text-white">
      {/* Greetings and Quick Overview */}
      <div className="bg-blue-700 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-xl font-semibold">Welcome back, [User Name]!</h1>
        <p className="mt-2">
          You have [X] items in your pantry. Ready to discover some recipes?
        </p>
      </div>

      {/* Recipe Suggestions */}
      <div className="bg-blue-700 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">
          Suggested Recipes for You
        </h2>
        {/* Display a list/grid of suggested recipes based on pantry items */}
      </div>

      {/* Saved Recipes */}
      <div className="bg-blue-700 p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold mb-4">Your Saved Recipes</h2>
        {/* Display a list/grid of user's saved or posted recipes */}
      </div>

      {/* Community Feed */}
      <div className="bg-blue-700 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Community Feed</h2>
        {/* Display a feed of recipes shared by other users */}
      </div>

      {/* Navigation */}
      <div className="mt-6 flex justify-between">
        <Link
          to="/profile"
          className="bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-md"
        >
          Go to Profile
        </Link>
        <button
          onClick={useLogout}
          className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
