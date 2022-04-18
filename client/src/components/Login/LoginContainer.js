import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import Form from "./Form";

const useStyles = makeStyles((theme) => ({
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
      marginTop: "6vh",
    },
  },
}));

const LoginContainer = ({ statement, form, handler, formErrorMessage }) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item className={classes.loginContainer}>
        <Header statement={statement} />
        <Form
          form={form}
          handler={handler}
          formErrorMessage={formErrorMessage}
        />
      </Grid>
    </Grid>
  );
};

export default LoginContainer;
