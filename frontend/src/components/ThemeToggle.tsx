import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [darkTheme, setDarkTheme] = useState(() => localStorage.getItem("theme") === "dark");

  useEffect(() => {
    const theme = darkTheme ? "dark" : "light";
    document.documentElement.setAttribute("theme", theme);
    localStorage.setItem("theme", theme);
    
  }, [darkTheme]);

  return (
    <button className="icon-btn theme-toggle" aria-label="Toggle theme" onClick={() => setDarkTheme((prev) => !prev)}>
      { darkTheme ? <Moon size={18} className="moon" /> : <Sun size={18} className="sun" /> } 
    </button>
  );
}