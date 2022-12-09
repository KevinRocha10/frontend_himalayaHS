/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../assets/img/logos.jpg";
import "../assets/css/login.css";

const login = () => {
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
          <form action="#">
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
            <input type="usuario" placeholder="User" />
            <input type="password" placeholder="Password" />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button>
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
};

export default login;
