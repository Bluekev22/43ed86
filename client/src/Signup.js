import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Root from "./components/Login/Root";

const Signup = ({ user, register }) => {
  const history = useHistory();

  const [formState, setFormState] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleRegister = async (event) => {
    event.preventDefault();

    const username = formState.username;
    const email = formState.email;
    const password = formState.password;
    const confirmPassword = formState.confirmPassword;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: "Passwords must match" });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push("/home");
  }, [user, history]);

  return (
    <Root
      href="/login"
      text="Login"
      question="Already have an account?"
      statement="Create an account"
      form="signup"
      handler={handleRegister}
      formErrorMessage={formErrorMessage}
      handleChange={handleChange}
    />
  );
};

export default Signup;
