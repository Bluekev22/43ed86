import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from "@material-ui/core";
import SideCard from "./components/Login/SideCard";
import FormContainer from "./components/Login/FormContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "stretch",
    },
    [theme.breakpoints.between("sm", "lg")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "stretch",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
}));

const Login = ({ user, login }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
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
    <Grid container className={classes.root}>
      {matches ? null : <SideCard />}
      <FormContainer
        href="/register"
        text="Create account"
        question="Don't have an account?"
        statement="Welcome back!"
        form="login"
        handler={handleLogin}
      />
    </Grid>
  );
};

export default Login;
