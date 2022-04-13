import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LinkContainer from "./LinkContainer";
import LoginContainer from "./LoginContainer";

const useStyles = makeStyles((theme) => ({
  formContainer: {
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

const FormContainer = ({
  href,
  text,
  question,
  statement,
  form,
  handler,
  formErrorMessage,
}) => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      xl={4}
      lg={7}
      md={6}
      sm={12}
      xs={12}
      className={classes.formContainer}
    >
      <LinkContainer href={href} text={text} question={question} />
      <LoginContainer
        statement={statement}
        form={form}
        handler={handler}
        formErrorMessage={formErrorMessage}
      />
    </Grid>
  );
};

export default FormContainer;
