import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  previewImageBox: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  previewImage: {
    height: "50px",
    width: "60px",
    borderRadius: "10px",
  },
  selectedText: {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#BECCE2",
    marginRight: "8px",
  },
}));

const Preview = ({ previewSource }) => {
  const classes = useStyles();
  return (
    <Box className={classes.previewImageBox}>
      {previewSource.length ? (
        <Box className={classes.selectedText}>
          {previewSource.length}&nbsp;selected
        </Box>
      ) : null}
      {previewSource
        ? previewSource.map((image, index) => (
            <Box>
              <img
                key={index}
                src={image}
                alt="preview"
                className={classes.previewImage}
              />
            </Box>
          ))
        : null}
    </Box>
  );
};

export default Preview;
