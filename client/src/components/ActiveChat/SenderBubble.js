import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Text from "./Text";
import Time from "./Time";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
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
    borderRadius: "10px 10px 0 10px",
    marginLeft: "8px",
    marginTop: "8px",
  },
}));

const SenderBubble = ({ time, text, attachments }) => {
  const classes = useStyles();

  if (attachments?.length > 1 && text) {
    return (
      <Box className={classes.root}>
        <Box className={classes.bubbleWithTextAndPhoto}>
          <Text text={text} sender={true} />
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
        <Time time={time} />
      </Box>
    );
  } else if (attachments?.length === 1 && text) {
    return (
      <Box className={classes.root}>
        <Time time={time} />
        <Box className={classes.imageContainer}>
          {<img className={classes.oneImageWithText} src={attachments} />}
        </Box>
        <Box className={classes.bubbleWithTextAndPhoto}>
          <Text text={text} sender={true} />
        </Box>
      </Box>
    );
  } else if (attachments?.length) {
    return (
      <Box className={classes.root}>
        <Time time={time} />
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
        <Time time={time} />
        <Box className={classes.bubble}>
          <Text text={text} sender={true} />
        </Box>
      </Box>
    );
  }
};

export default SenderBubble;
