import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { login } from "../redux/auth/auth.operations";
import styles from "./Views.Module.css";

const initialState = {
  email: "",
  password: "",
};

const LoginView = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();
  const location = useLocation();
  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(state));
    setState({ name: "", email: "", password: "" });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>Страница логина</h2>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <lable className={styles.lable}>
          <span className={styles.title}>Почта</span>
          <input
            className={styles.input}
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
          ></input>
        </lable>
        <lable className={styles.lable}>
          <span className={styles.title}>Пароль</span>
          <input
            className={styles.input}
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
          ></input>
        </lable>
        <button type="submit" className={styles.btn}>
          {location.pathname === "/registration" ? "REGISTER" : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default LoginView;
