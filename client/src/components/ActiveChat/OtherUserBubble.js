import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Avatar } from "@material-ui/core";
import Text from "./Text";
import Time from "./Time";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  avatar: {
    height: 30,
    width: 30,
    marginRight: 11,
    marginTop: 6,
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
  },
  bubbleWithTextAndPhoto: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "10px 10px 0 0",
  },
  imageContainer: {
    display: "flex",
  },

  oneImage: {
    width: "150px",
    height: "150px",
    borderRadius: "10px 10px 10px 0",
  },
  oneImageWithText: {
    width: "150px",
    height: "122px",
    borderRadius: "10px 10px 0 0",
  },
  multipleImages: {
    width: "100px",
    height: "77px",
    borderRadius: "10px 10px 10px 0",
    marginRight: "8px",
  },
  multipleImagesWithText: {
    width: "100px",
    height: "77px",
    borderRadius: "10px 10px 10px 0",
    marginRight: "8px",
  },
}));

const OtherUserBubble = ({ text, time, otherUser, attachments }) => {
  const classes = useStyles();

  if (attachments?.length > 1 && text) {
    return (
      <Box>
        <Avatar
          alt={otherUser.username}
          src={otherUser.photoUrl}
          className={classes.avatar}
        />
        <Box className={classes.root}>
          <Box className={classes.bubbleWithTextAndPhoto}>
            <Text text={text} sender={false} />
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
      </Box>
    );
  } else if (attachments?.length === 1 && text) {
    return (
      <Box>
        <Avatar
          alt={otherUser.username}
          src={otherUser.photoUrl}
          className={classes.avatar}
        />
        <Box className={classes.root}>
          <Time time={time} />
          <Box className={classes.imageContainer}>
            {<img className={classes.oneImageWithText} src={attachments} />}
          </Box>
          <Box className={classes.bubbleWithTextAndPhoto}>
            <Text text={text} sender={false} />
          </Box>
        </Box>
      </Box>
    );
  } else if (attachments?.length) {
    return (
      <Box>
        <Avatar
          alt={otherUser.username}
          src={otherUser.photoUrl}
          className={classes.avatar}
        />
        <Box className={classes.root}>
          <Time time={time} />
          <Box className={classes.imageContainer}>
            {attachments.length > 1 ? (
              attachments.map((attachment, index) => (
                <img
                  key={index}
                  className={classes.multipleImages}
                  src={attachment}
                  alt=""
                />
              ))
            ) : (
              <img className={classes.oneImage} src={attachments} />
            )}
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box className={classes.root}>
        <Avatar
          alt={otherUser.username}
          src={otherUser.photoUrl}
          className={classes.avatar}
        />
        <Box>
          <Time time={time} username={otherUser.username} />
          <Box className={classes.bubble}>
            <Text text={text} sender={false} />
          </Box>
        </Box>
      </Box>
    );
  }
};

export default OtherUserBubble;
