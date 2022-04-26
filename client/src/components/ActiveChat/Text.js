import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  text: {
    letterSpacing: -0.2,
    padding: 8,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  senderText: {
    color: "#91A3C0",
  },
  otherUserText: {
    color: "#FFFFFF",
  },
}));

const Text = ({ sender, text }) => {
  const classes = useStyles();
  if (sender) {
    return (
      <Typography className={classNames(classes.senderText, classes.text)}>
        {text}
      </Typography>
    );
  } else {
    return (
      <Typography className={classNames(classes.otherUserText, classes.text)}>
        {text}
      </Typography>
    );
  }
};

export default Text;
