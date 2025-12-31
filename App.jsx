import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import FavoritesProvider from "./context/FavoritesContext";
import ThemeProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <BrowserRouter>
          <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>

            {/* Dark Mode Toggle Button */}
            <ThemeToggle />
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </FavoritesProvider>
    </ThemeProvider>
  );
}
