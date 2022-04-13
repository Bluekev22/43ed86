import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from "@material-ui/core";
import FormContainer from "./FormContainer";
import SideCard from "./SideCard";

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

const Root = ({
  href,
  text,
  question,
  statement,
  form,
  handler,
  formErrorMessage,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container className={classes.root}>
      {matches ? null : <SideCard />}
      <FormContainer
        href={href}
        text={text}
        question={question}
        statement={statement}
        form={form}
        handler={handler}
        formErrorMessage={formErrorMessage}
      />
    </Grid>
  );
};

export default Root;
