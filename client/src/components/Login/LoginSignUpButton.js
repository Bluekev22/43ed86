import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    fontSize: "14px",
    marginTop: "6vh",
    width: "160px",
    height: "56px",
    borderRadius: "3px",
    background: theme.palette.primary.main,
    color: "white",
  },
}));

const LoginSignUpButton = ({ text }) => {
  const classes = useStyles();
  return (
    <Grid container item justifyContent="center">
      <Button
        className={classes.button}
        type="submit"
        variant="contained"
        size="large"
      >
        {text}
      </Button>
    </Grid>
  );
};

export default LoginSignUpButton;
