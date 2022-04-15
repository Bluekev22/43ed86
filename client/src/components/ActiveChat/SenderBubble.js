import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  date: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    color: "#91A3C0",
    letterSpacing: -0.2,
    padding: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },

  oneImage: {
    width: "150px",
    height: "150px",
    borderRadius: "10px 10px 0 10px",
  },
  oneImageWithText: {
    width: "150px",
    height: "122px",
    borderRadius: "10px 10px 0 0",
  },
  multipleImages: {
    width: "100px",
    height: "77px",
    borderRadius: "10px 10px 0 10px",
    marginLeft: "8px",
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  console.log(attachments);
  const classes = useStyles();

  if (attachments.length && text) {
    return (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes.bubble}>
          {attachments.length > 1 ? (
            attachments.map((attachment) => (
              <img className={classes.multipleImages} src={attachment} />
            ))
          ) : (
            <img className={classes.oneImageWithText} src={attachments} />
          )}

          <Typography className={classes.text}>{text}</Typography>
        </Box>
      </Box>
    );
  } else if (attachments.length) {
    return (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes.bubble}>
          {attachments.length > 1 ? (
            attachments.map((attachment) => (
              <img className={classes.multipleImages} src={attachment} />
            ))
          ) : (
            <img className={classes.oneImage} src={attachments} />
          )}

          <Typography className={classes.text}>{text}</Typography>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes.bubble}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      </Box>
    );
  }
};

export default SenderBubble;
