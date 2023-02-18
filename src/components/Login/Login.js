/* eslint-disable jsx-a11y/anchor-is-valid */
// import "../../styles/login.css";
import React, {useState }from "react";
// import Axios from "axios";
import {useNavigate} from "react-router-dom"
import logo from "../../images/logos.jpg";

export default function Logueo() {
  const [body, setBody] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = e => {
    setBody({...body, [e.target.name]: e.target.value });
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
            className="needs-validation"
          >
            <h1>LOGIN</h1>
            
              <div className="social-container">
              <header>
                <a href="https://www.facebook.com/profile.php?id=100083413627406" className="social">
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a href="https://www.instagram.com/himalaya_school/" className="social">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://web.whatsapp.com/send?phone=573176492617&amp;text=%C2%A1Bienvenido%20al%20Colegio%20Himalaya%20-%20Himalaya%20School!%0A%0AEn%20un%20momento%20te%20responderemos." className="social">
                  <i className="fa-brands fa-whatsapp"></i>
                </a>
              </header>
            </div>
            <span></span>
            <label>User o Email</label>
            <input
              fullWidth
              autoFocus
              margin= "normal"
              variant="outlined"
              id="user"
              name="username"
              value={body.username}
              type="text"
              className="form-control"
              required
              onChange={handleChange}
            />
            <label>Password</label>
            <input
            fullWidth
            autoFocus
            margin= "normal"
            variant="outlined"
            id="password"
            name="password"
            value={body.password}
            type="password"
            className="form-control"
            required
            onChange={handleChange}
            />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button 
              fullWidth
              variant="contained"
              // className="btn btn-primary" onClick={() => onSubmit}
              onClick={() => navigate('../dashboard', { replace: true })}
              >
              Entrar
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
