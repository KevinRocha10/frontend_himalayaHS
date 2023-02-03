/* eslint-disable jsx-a11y/anchor-is-valid */
import "../../assets/css/login.css";
import React from "react";
// import Axios from "axios";
import logo from "../../assets/img/logos.jpg";

function Logueo() {
  // const [body, setbody] = useState({ username: "", password: "" });
  // const [username, setUserName] = useState("");
  // const [password, setPassword] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");

  // const login = () => {
  //   Axios.post("http://localhost:3001/login", {
  //     username: username,
  //     password: password,
  //   }).then((response) => {
  //     if (response.data.message) {
  //       setLoginStatus(response.data.message);
  //     } else {
  //       setLoginStatus(response.data[0].username);
  //     }
  //     console.log(response);
  //   });
  // };

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
            noValidate={true}
            autoComplete="off"
          >
            <h1>LOGIN</h1>
            {/* <h1>Estado = {loginStatus}</h1> */}
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
            <label>User o Email</label>
            <input
              id="email"
              type="text"
              // onChange={(e) => {setUserName(e.target.value);}}
              className="form-control"
              name="usuario"
              required
              autoFocus
              // value={body.username}
            />
            <label>Password</label>
            <input
              id="password"
              type="password"
              // onChange={(e) => {setPassword(e.target.value);}}
              className="form-control"
              name="clave"
              required
              // value={body.password}
            />
            <a href="#">¿Olvidaste tu contraseña?</a>
            <button className="btn btn-primary">
              {/* onClick={} */}
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

export default Logueo;
