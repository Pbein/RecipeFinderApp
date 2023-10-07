// ./src/App.jsx
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Login from './routes/Login';
import Register from './routes/Register';
import Profile from './routes/Profile';
import HomePage from './routes/HomePage';

function App() {
  return (

    <HomePage/>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/dashboard" element={<Dashboard />} />
    //     <Route path="/profile" element={<ProfileWrapper />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

function ProfileWrapper() {
  return (
    <div>
      {/* Any common profile header/navigation can go here */}
      <nav>
        {/* You can put any common profile related links here */}
      </nav>
      <Outlet />
      {/* Profile specific routes go here */}
      <Routes>
        {/* You can add nested profile specific routes here */}
        <Route path="/" element={<Profile />} /> {/* default profile route */}
        {/* For example, you can add settings or any other nested route */}
        {/* <Route path="settings" element={<ProfileSettings />} /> */}
      </Routes>
    </div>
  );
}

export default App;
// end of frontend/src/App.jsx
