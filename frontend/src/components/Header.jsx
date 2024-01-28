// start of RecipeFinderApp/frontend/src/components/Header.jsx
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import LogoIconTransparent from "../assets/LogoIconTransparent.png";

export default function Header() {
  return (
    <div className="bg-slate-200 shadow-md">
      <div>
        <div className="flex justify-between items-center max-w-8xl mx-auto p-1">
          <Link to="/">
            <div>
              <img
                src={LogoIconTransparent}
                alt="This is a logo"
                width={100}
                height={100}
              />
            </div>
          </Link>
          <ul className="nav-links flex flex-row justify-between w-4/12 font-bold">
            {/* Links and pages to be added */}
            <li>
              <h1>Popular Recipes</h1>
            </li>
            <li>
              <h1>Community Forum</h1>
            </li>
            <li>
              <h1>Meal Planning</h1>
            </li>
          </ul>

          <ul className="nav-links flex gap-4 pr-6">
            <li className="hidden sm:inline text-slate-700 hover:underline font-bold">
              <Link to="/recipes">Recipes</Link>
            </li>
            <li className="text-blue-700 hover:underline font-bold">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center max-w-6xl mx-auto p-5">
        <form className="bg-slate-100 p-3 rounded-lg flex justify-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-48 md:w-64 lg:w-96"
          />
          <FaSearch className="text-slate-500" />
        </form>
      </div>
    </div>
  );
}
// end of RecipeFinderApp/frontend/src/components/Header.jsx
