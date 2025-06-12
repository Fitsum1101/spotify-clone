import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MusicPlayingProvider from "./context/MusicPlayingProvider.jsx";

createRoot(document.getElementById("root")).render(
  <MusicPlayingProvider>
    <App />
  </MusicPlayingProvider>
);
