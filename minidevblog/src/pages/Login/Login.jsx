import React from "react";

import styles from "./Login.module.css";
import { useState, useEffect } from "react";
import { userAuthentication } from '../../hooks/userAuthentication'
import { useNavigate } from "react-router-dom";
import { set } from "firebase/database";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = userAuthentication();
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = {
      email,
      password,
    };
    const res = await login(user);

    console.table(res);
    navigate("/");
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return(
    <div className={styles.login}>
      <h1>
        Faça o login
      </h1>
      <form onSubmit={handlerSubmit}>
        <label className={styles.label}>
          <span >
            E-mail :  
          </span>
          <input
           type="email"
           name="email"
           required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
            className={styles.input}
            ></input>
        </label>
        <label className={styles.label}>
          <span>
            Senha : 
          </span>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
            className={styles.input}
            ></input>
        </label>
        { !loading ? (
          <button type="submit" className={styles.button}>
            Entrar
          </button>
        ) : (
          <button type="submit" disabled>
            Carregando...
          </button>
        )} 
      </form>
    </div>
  )
};

export default Login;