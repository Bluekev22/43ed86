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
  },
  bubble: {
    background: "#F4F6FA",
    borderRadius: "10px 10px 0 10px",
  },
  bubbleWithTextAndPhoto: {
    background: "#F4F6FA",
    borderRadius: "0 0 10px 10px",
  },

  imageContainer: {
    display: "flex",
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
  multipleImagesWithText: {
    width: "100px",
    height: "77px",
    borderRadius: "10px 10px 0 0",
    marginLeft: "8px",
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();

  if (attachments?.length > 1 && text) {
    return (
      <Box className={classes.root}>
        <Box className={classes.bubbleWithTextAndPhoto}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
        <Box className={classes.imageContainer}>
          {attachments.map((attachment, index) => (
            <img
              key={index}
              className={classes.multipleImagesWithText}
              src={attachment}
            />
          ))}
        </Box>
        <Typography className={classes.date}>{time}</Typography>
      </Box>
    );
  } else if (attachments?.length === 1 && text) {
    return (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes.imageContainer}>
          {<img className={classes.oneImageWithText} src={attachments} />}
        </Box>
        <Box className={classes.bubbleWithTextAndPhoto}>
          <Typography className={classes.text}>{text}</Typography>
        </Box>
      </Box>
    );
  } else if (attachments?.length) {
    return (
      <Box className={classes.root}>
        <Typography className={classes.date}>{time}</Typography>
        <Box className={classes.imageContainer}>
          {attachments.length > 1 ? (
            attachments.map((attachment, index) => (
              <img
                key={index}
                className={classes.multipleImages}
                src={attachment}
              />
            ))
          ) : (
            <img className={classes.oneImage} src={attachments} />
          )}
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
