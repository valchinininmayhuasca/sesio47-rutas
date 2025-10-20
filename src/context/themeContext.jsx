/* eslint-disable react-refresh/only-export-components */
// src/context/ThemeContext.jsx
import { createContext, useContext, useState, useMemo } from "react";

const ThemeContext = createContext(null);

// Hook de conveniencia
export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme debe usarse dentro de <ThemeProvider>");
  return ctx;
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(t => (t === "light" ? "dark" : "light"));

  // Evita re-render innecesario en consumidores
  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
