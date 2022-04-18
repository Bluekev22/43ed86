import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Avatar } from "@material-ui/core";

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
  usernameDate: {
    fontSize: 11,
    color: "#BECCE2",
    fontWeight: "bold",
    marginBottom: 5,
  },
  bubble: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "0 10px 10px 10px",
  },
  bubbleWithTextAndPhoto: {
    backgroundImage: "linear-gradient(225deg, #6CC1FF 0%, #3A8DFF 100%)",
    borderRadius: "10px 10px 0 0",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -0.2,
    padding: 8,
    textAlign: "center",
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
    borderRadius: "0 0 10px 10px",
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
          <Typography className={classes.usernameDate}>{time}</Typography>
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
          <Typography className={classes.usernameDate}>{time}</Typography>
          <Box className={classes.imageContainer}>
            {<img className={classes.oneImageWithText} src={attachments} />}
          </Box>
          <Box className={classes.bubbleWithTextAndPhoto}>
            <Typography className={classes.text}>{text}</Typography>
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
          <Typography className={classes.usernameDate}>{time}</Typography>
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
          <Typography className={classes.usernameDate}>
            {otherUser.username} {time}
          </Typography>
          <Box className={classes.bubble}>
            <Typography className={classes.text}>{text}</Typography>
          </Box>
        </Box>
      </Box>
    );
  }
};

export default OtherUserBubble;
