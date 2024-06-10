import React from "react";
import "./App.scss";
import { appRoutes } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

const MyApp = () => (
  <Provider store={store}>
    <Router basename="timor/api/apps/timor-dashboard/">
    {/* <Router> */}
      <Main />
    </Router>
  </Provider>
);

export default MyApp;
