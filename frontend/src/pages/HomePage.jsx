// src/pages/HomePage.jsx
import "./styles/HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {

  return (
    <div>
      <h1>Welcome to our App!</h1>
      <p>
        If you have an account, you can <Link to="/login">login here</Link>.
      </p>
      {/* You can also link to Register if needed */}
      <p>
        Don&rsquo;t have an account? <Link to="/register">Register now</Link>
      </p>
    </div>
  );
}

export default HomePage;
// end of src/pages/HomePage.jsx
