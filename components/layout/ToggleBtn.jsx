"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleBtn() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=" cursor-pointer"
    >
      {theme === "dark" ? <Sun size={28} /> : <Moon size={28} />}
    </button>
  );
}
