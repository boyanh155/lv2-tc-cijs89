import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import ApiStateProvider from "./contexts/ApiStateProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApiStateProvider>
      <App />
    </ApiStateProvider>
  </React.StrictMode>
);
