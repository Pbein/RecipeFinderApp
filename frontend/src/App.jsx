// ./src/App.jsx
import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";
import Profile from "./routes/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  )
}

// function ProfileWrapper() {
//   return (
//     <div>
//       {/* Any common profile header/navigation can go here */}
//       <nav>
//         {/* You can put any common profile related links here */}
//       </nav>
//       <Outlet />
//       {/* Profile specific routes go here */}
//       <Routes>
//         {/* You can add nested profile specific routes here */}
//         <Route path="/" element={<Profile />} /> {/* default profile route */}
//         {/* For example, you can add settings or any other nested route */}
//         {/* <Route path="settings" element={<ProfileSettings />} /> */}
//       </Routes>
//     </div>
//   );
// }

export default App;
// end of frontend/src/App.jsx
