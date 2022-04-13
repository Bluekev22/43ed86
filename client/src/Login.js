import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Root from "./components/Login/Root";

const Login = ({ user, login }) => {
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Root
      href="/register"
      text="Create account"
      question="Don't have an account?"
      statement="Welcome back!"
      form="login"
      handler={handleLogin}
    />
  );
};

export default Login;
