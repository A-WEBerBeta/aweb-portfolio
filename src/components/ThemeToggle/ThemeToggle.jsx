import { Moon, Sun } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") return saved;
  const prefersDark = window.matchMedia?.(
    "(prefers-color-scheme: dark)",
  )?.matches;
  return prefersDark ? "dark" : "light";
}

export default function ThemeToggle({ className = "", variant = "icon" }) {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleLabel = useMemo(
    () => (isDark ? "Passer en mode clair" : "Passer en mode sombre"),
    [isDark],
  );

  const toggle = () => setTheme(isDark ? "light" : "dark");

  if (variant === "row") {
    return (
      <button
        type="button"
        className={className}
        onClick={toggle}
        aria-label={toggleLabel}
      >
        {isDark ? (
          <Sun size={18} strokeWidth={2} />
        ) : (
          <Moon size={18} strokeWidth={2} />
        )}
        <span>Thème</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={toggle}
      aria-label={toggleLabel}
      title={toggleLabel}
    >
      {isDark ? (
        <Sun size={18} strokeWidth={2} />
      ) : (
        <Moon size={18} strokeWidth={2} />
      )}
    </button>
  );
}
