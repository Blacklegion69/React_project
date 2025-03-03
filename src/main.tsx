import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TamaguiProvider } from "tamagui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TamaguiProvider>
      <App />
    </TamaguiProvider>
  </StrictMode>
);
