import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Root from "./components/Login/Root";

const Login = ({ user, login }) => {
  const history = useHistory();

  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const email = formState.email;
    const password = formState.password;
    console.log(email, password);

    await login({ email, password });
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
      handleChange={handleChange}
    />
  );
};

export default Login;
