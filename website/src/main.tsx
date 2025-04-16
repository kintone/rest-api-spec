import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./index.css";
import App from "./App.tsx";
import "swagger-ui/dist/swagger-ui.css";
import SwaggerUI from "swagger-ui";
import SwaggerUIStandalonePreset from "swagger-ui/dist/swagger-ui-standalone-preset";

// const ui = SwaggerUI({
//   dom_id: "#root",
//   // url: import.meta.env.OAS_ENTRY_FILE_PATHS[0],
//   urls: import.meta.env.OAS_ENTRY_FILE_PATHS.map((p) => ({
//     name: "p",
//     url: p,
//   })),
//   deepLinking: true,
//   presets: [SwaggerUI.presets.apis, SwaggerUIStandalonePreset],
//   layout: "StandaloneLayout",
// });

const root = document.getElementById("root");

if (root == null) {
  throw new Error("Could not find root element: #root");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
