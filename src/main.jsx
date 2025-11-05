import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Ensure dark class is present before React mounts to avoid light-theme flash
try {
  if (typeof document !== "undefined") {
    document.documentElement.classList.add("dark");
  }
} catch (e) {
  // ignore when running in non-DOM environments
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
