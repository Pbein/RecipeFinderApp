// src/pages/HomePage.jsx
import "./styles/HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
      <section className="hero-section bg-slate-800 text-white p-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Recipe Finder</h1>
        <p className="mb-6">
          Discover endless culinary possibilities based on the ingredients you
          already have!
        </p>
        <img
          src="/assets/hero-image.jpg"
          alt="A vibrant kitchen setup with various fresh ingredients."
          className="rounded-lg mb-6"
        />
        <p className="mb-4">
          Create a profile to personalize your experience or dive right in as a
          guest. Your tasty journey awaits!
        </p>
        <div className="cta-buttons flex gap-4">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </section>

      <section className="features-section bg-violet-100 p-10">
        <div className="feature-item flex gap-4 mb-6">
          <div className="feature-icon">
            <img
              src="/assets/pantry-icon.jpg"
              alt="Icon of a pantry"
              className="rounded-lg"
            />
          </div>
          <div className="feature-description">
            <h2 className="text-2xl font-bold mb-2">Save Your Pantry</h2>
            <p>
              List your available ingredients once and we'll keep them safe for
              your next visit. No more tedious re-entry!
            </p>
          </div>
        </div>
        <div className="feature-item flex gap-4 mb-6">
          <div className="feature-icon">
            <img
              src="/assets/community-icon.jpg"
              alt="Icon of a community"
              className="rounded-lg"
            />
          </div>
          <div className="feature-description">
            <h2 className="text-2xl font-bold mb-2">Share and Explore</h2>
            <p>
              Become part of a community of food lovers. Share your recipes and
              try new ones from fellow members.
            </p>
          </div>
        </div>
        <div className="feature-item flex gap-4">
          <div className="feature-icon">
            <img
              src="/assets/recipe-icon.jpg"
              alt="Icon of a recipe book"
              className="rounded-lg"
            />
          </div>
          <div className="feature-description">
            <h2 className="text-2xl font-bold mb-2">Endless Recipes</h2>
            <p>
              Whether you're a pro chef or a newbie, explore a vast array of
              recipes and find the perfect match for your taste buds.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
// end of src/pages/HomePage.jsx
