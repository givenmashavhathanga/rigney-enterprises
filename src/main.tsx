import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./brand.css"; // Only use brand.css which now contains the full theme
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);