import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MoodBoard } from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MoodBoard />
  </StrictMode>,
);
