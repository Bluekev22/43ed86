import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Typography, FormControl, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SideCard from "./components/Login/SideCard";
import LinkContainer from "./components/Login/LinkContainer";
import LoginSignUpButton from "./components/Login/LoginSignUpButton";
import Header from "./components/Login/Header";

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

  loginContainer: {
    marginTop: "9vh",
    [theme.breakpoints.up("sm")]: {
      width: "390px",
      marginRight: "16vw",
    },
    [theme.breakpoints.down("sm")]: {
      width: "350px",
      marginRight: "2vw",
      marginLeft: "2vw",
      marginBottom: "12vh",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70vw",
    },
  },
  textField: {
    marginTop: "2vh",
    paddingTop: "2vh",
    width: "390px",
    [theme.breakpoints.between("xs", "sm")]: {
      marginRight: "16vw",
      width: "350px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70vw",
    },
  },
  forgotPassword: {
    color: theme.palette.primary.main,
    fontSize: "12px",
  },
}));

const Login = ({ user, login }) => {
  const classes = useStyles();
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
      <SideCard />

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

        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className={classes.loginContainer}>
            <Header statement="Welcome back!" />
            <form onSubmit={handleLogin}>
              <FormControl margin="normal" required>
                <TextField
                  className={classes.textField}
                  aria-label="E-mail address"
                  label="E-mail address"
                  name="E-mail address"
                  type="text"
                />
              </FormControl>
              <FormControl margin="normal" required>
                <TextField
                  className={classes.textField}
                  label="Password"
                  aria-label="Password"
                  type="Password"
                  name="Password"
                  InputProps={{
                    endAdornment: (
                      <Typography className={classes.forgotPassword}>
                        Forgot?
                      </Typography>
                    ),
                    classes: {
                      adornedEnd: classes.adornedEnd,
                    },
                  }}
                />
              </FormControl>
              <LoginSignUpButton text="Login" />
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
