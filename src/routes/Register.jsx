import styles from "../styles/register.module.css";
import logo from "../images/logo.svg";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { formValidate } from "../utilities/formValidate";
import FormError from "../components/FormError";
import { alertError, alertSuccess } from "../utilities/Alerts";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const URI = "https://zoratamamap.herokuapp.com/api/users/register";

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const {
    required,
    patternEmail,
    minLength,
    validateTrim,
    validateEquals,
    patternPassword,
  } = formValidate();

  const onSubmit = async (data) => {
    try {
      await axios.post(URI, data);
      alertSuccess(`La cuenta ha sido creada satisfactoriamente`);
    } catch (error) {
      alertError(error.response.data);
    }
  };

  return (
    <div className={styles.register}>
      <div className={styles.content}>
        <div className={styles["register-box"]}>
          <div className={styles.header}>
            <img src={logo} alt="logo" />
          </div>
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="text"
                placeholder="Nombre"
                name="nombre"
                {...register("nombre", {
                  required,
                })}
              />
            </div>
            {errors.nombre && <FormError error={errors.nombre} />}
            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="text"
                placeholder="Apellido"
                name="apellido"
                {...register("apellido", {
                  required,
                })}
              />
            </div>
            {errors.apellido && <FormError error={errors.apellido} />}
            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="text"
                placeholder="Teléfono"
                name="telefono"
                {...register("telefono", {
                  required,
                })}
              />
            </div>
            {errors.telefono && <FormError error={errors.telefono} />}
            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="text"
                placeholder="Correo electrónico"
                name="correo"
                {...register("correo", {
                  required,
                  pattern: patternEmail,
                })}
              />
            </div>
            {errors.correo && <FormError error={errors.correo} />}
            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="password"
                placeholder="Contraseña"
                name="password"
                {...register("password", {
                  minLength,
                  validate: validateTrim,
                  pattern: patternPassword,
                })}
              />
            </div>
            {errors.password && <FormError error={errors.password} />}

            <div className={styles["input-box"]}>
              <input
                className={styles.input}
                type="password"
                placeholder="Confirmar contraseña"
                name="confirmPassword"
                {...register("confirmPassword", {
                  validate: validateEquals(getValues),
                })}
              />
            </div>
            {errors.confirmPassword && (
              <FormError error={errors.confirmPassword} />
            )}

            <span className={styles["button-box"]}>
              <button>Registrarse</button>
            </span>
          </form>
        </div>
        <div className={styles["register-box"]}>
          <p className={styles["text"]}>
            ¿Ya tienes una cuenta?
            <Link to="/">Iniciar sesión</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
