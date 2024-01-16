import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import "./index.css";
import { store } from "./store.js";
import { ToastContainer } from "react-toastify";
import { GlobalContexProvider } from "./context/GlobalContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <GlobalContexProvider>
      <App />
      <ToastContainer />
    </GlobalContexProvider>
  </Provider>
);
