// src/routes/Dashboard.js
import { Link } from "react-router-dom";
import useAuthStore from "../stores/authStore";

function Dashboard() {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    //   // If there's no token, redirect to HomePage or Login.
    window.location.href = "/";
  }

  return (
    <div>
      <h1>Your Dashboard</h1>
      {/* Any dashboard related content */}
      <Link to="/profile">Go to Profile</Link>
    </div>
  );
}

export default Dashboard;
// end of src/routes/Dashboard.js
