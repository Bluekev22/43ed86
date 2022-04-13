import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from "@material-ui/core";
import SideCard from "./components/Login/SideCard";
import LinkContainer from "./components/Login/LinkContainer";
import LoginContainer from "./components/Login/LoginContainer";

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

  entireFormContainer: {
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
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

      <Grid
        container
        item
        xl={4}
        lg={7}
        md={6}
        sm={12}
        xs={12}
        className={classes.entireFormContainer}
      >
        <LinkContainer
          href="/register"
          text="Create account"
          question="Don't have an account?"
        />
        <LoginContainer
          statement="Welcome back!"
          form="login"
          handler={handleLogin}
        />
      </Grid>
    </Grid>
  );
};

export default Login;
