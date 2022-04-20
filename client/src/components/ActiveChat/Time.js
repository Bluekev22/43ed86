import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
}));

const Time = ({ time, username }) => {
  const classes = useStyles();

  return (
    <Typography className={classes.date}>
      {username ? username : null} {time}
    </Typography>
  );
};

export default Time;
