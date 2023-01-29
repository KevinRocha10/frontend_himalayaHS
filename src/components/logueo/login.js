/* eslint-disable jsx-a11y/anchor-is-valid */
// import "../assets/css/login.css";
import "./login.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
//import logo from "../assets/img/logos.jpg";
import logo from "../img/logos.jpg";

function Log() {
  const [datos, setDatos] = useState({
    usuario: "",
    clave: "",
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...datos, [name]: value };
    setDatos(newDatos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!e.target.checkValidity()) {
      console.log("no enviar");
    } else {
      let res = await axios.post("http://localhost:3001/login", datos);
      console.log(res.data);
    }
  };

  return (
    <div>
      <div id="Frase">
        HIMALAYA
        <div id="flip">
          <div>
            <div>Ciencia</div>
          </div>
          <div>
            <div>Fe</div>
          </div>
          <div>
            <div>Liderazgo</div>
          </div>
        </div>
        SCHOOL
      </div>
      <br />

      {/*  */}

      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form
            onSubmit={handleSubmit}
            className="needs-validation"
            noValidate={true}
            autoComplete="off"
          >
            <h1>LOG IN</h1>
            <div className="social-container">
              <header>
                <a href="#" className="social">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="#" className="social">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="#" className="social">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </header>
            </div>
            <span></span>
            <input
              id="email"
              type="text"
              onChange={handleInputChange}
              value={datos.usuario}
              className="form-control"
              name="usuario"
              required
              autoFocus
            />
            <input
              id="password"
              type="password"
              onChange={handleInputChange}
              value={datos.clave}
              className="form-control"
              name="clave"
              required
            />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button type="submit" className="btn btn-primary">
              <link href="#"></link>Entrar
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <img src={logo} alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Log;
