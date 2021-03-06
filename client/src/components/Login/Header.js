import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  statement: {
    fontWeight: 600,
    fontSize: "26px",
    lineHeight: "40px",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const Header = ({ statement }) => {
  const classes = useStyles();
  return <Typography className={classes.statement}>{statement}</Typography>;
};

export default Header;
