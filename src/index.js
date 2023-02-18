import ReactDOM from "react-dom/client";
import "./index.css";

import React, { Suspense } from "react";
// para usar rutas utilizamos la ruta react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// componentes
import FormLogin from "./components/Login/index";
import DashboardBase from "./components/Dashboard/DashboardBase";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="App">
    <Router>
      {/* Lo usamos para mostrar algo mientras caga nuestra app */}
      <Suspense fallback={<h1>Cargando...</h1>}>
        <Routes>
          {/* <Route exact path="/" name="Login" render={() => <FormLogin />} /> */}
          <Route exact path="/" name="login" element={<FormLogin />} />
          <Route
            exact
            path="/dashboard"
            name="dashboard"
            element={<DashboardBase />}
          />
        </Routes>
      </Suspense>
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
