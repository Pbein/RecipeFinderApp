// start of RecipeFinderApp/frontend/src/components/Header.jsx
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm:text-xl flex flex-wrap">
            <span className="text-sky-400">Recipe</span>
            <span className="text-blue-400">Finder</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-48 md:w-64 lg:w-96"
          />
          <FaSearch className="text-slate-500" />
        </form>
        <ul className="nav-links flex gap-4">
          <li className="hidden sm:inline text-slate-700 hover:underline font-bold">
            <Link to="/recipes">Recipes</Link>
          </li>
          <li className="text-blue-700 hover:underline font-bold">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
// end of RecipeFinderApp/frontend/src/components/Header.jsx