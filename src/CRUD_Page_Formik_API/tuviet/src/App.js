import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import ApiPage from "./components/api_page.js";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ApiPage />
      </div>
    </Provider>
  );
}

export default App;
