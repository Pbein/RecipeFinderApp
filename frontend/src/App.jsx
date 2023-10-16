// ./src/App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
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
