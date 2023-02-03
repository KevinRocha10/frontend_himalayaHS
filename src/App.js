import "./App.css";
import React, { Suspense } from "react";
// para usar rutas utilizamos la ruta react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// componentes
// import FormLogin from "./components/Login/Login";
import DashboardBase from "./components/Dashboard/DashboardBase";

function App() {
  return (
    <div className="App">
      <Router>
        {/* Lo usamos para mostrar algo mientras caga nuestra app */}
        <Suspense fallback={<h1>Cargando...</h1>}>
          <Routes>
            {/* <Route exact path="/" name="Login" render={() => <FormLogin />} /> */}
            {/* <Route path="/" name="Login" element={<FormLogin />} /> */}
            <Route path="/app" name="Dashboard" element={<DashboardBase />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
