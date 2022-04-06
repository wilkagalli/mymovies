import React, { useState } from "react";
import { useInRouterContext, useNavigate } from "react-router";
import { useRef } from "react/cjs/react.development";
import { useUser } from "../../contexts/UserContext";
import styles from "./Login.module.scss";

// import { Container } from './styles';

function Login() {
  const navigate = useNavigate();

  const formRef = useRef();

  const [erros, setErros] = useState({});

  const mock = { email: "galliwilka@gmail.com", password: "123456" };

  const { setUserIsLogged } = useUser();

  function validateEmail(email) {
    if (email == mock.email) {
      return true;
    }

    return false;
  }

  function validatePassword(password) {
    if (password == mock.password) {
      return true;
    } else {
      return false;
    }
  }

  function validateAccount(account) {
    const objErros = {};

    if (!validateEmail(account.email)) {
      objErros.email = "O e-mail ainda não possui um cadastro";
    }

    if (!validatePassword(account.password)) {
      objErros.password = "A senha está incorreta";
    }

    sessionStorage.setItem("dados", JSON.stringify(mock));
    setUserIsLogged(JSON.stringify(mock));

    setErros(objErros);

    return Object.keys(objErros).length == 0;
  }

  function submit() {
    // event.preventDefault;

    const acc = {
      email: formRef.current.email.value,
      password: formRef.current.password.value,
    };

    if (validateAccount(acc)) {
      navigate("/home");
    }
  }

  return (
    <>
      <section className={styles.loginContainer}>
        <div className={styles.loginContent}>
          <div className={styles.layout}>
            <h1>Fazer Login</h1>
          </div>
          <div className={styles.loginPassawordContainer}>
            <form ref={formRef} id="login-form">
              <div className={styles.loginPassawordEmail}>
                <div className={styles.formInput}>
                  <input
                    name="email"
                    type="text"
                    placeholder="Insira seu e-mail"
                  ></input>
                  {erros.email && <p>{erros.email}</p>}
                </div>
                <div className={styles.formInput}>
                  <input
                    name="password"
                    type="text"
                    placeholder="Insira sua senha"
                  ></input>
                  {erros.password && <p>{erros.password}</p>}
                </div>
              </div>
            </form>

            <button
              onClick={submit}
              id="login"
              value="Fazer Login"
              className={styles.button}
              variant="success"
            >
              Fazer Login
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
