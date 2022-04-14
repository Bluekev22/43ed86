import React, { useState } from "react";
import { FormControl, FilledInput, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import contentCopyIcon from "../../assets/contentCopyIcon.svg";
require("dotenv").config();

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15,
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20,
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const uploadImage = (file) => {
    const CLOUD_CREDENTIALS = process.env.REACT_APP_CLOUD_CREDENTIALS;
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUD_CREDENTIALS);

    fetch(`https://api.cloudinary.com/v1_1/kevinshank/image/upload`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const imageURL = data.url;
        console.log(data);
        setAttachments((prev) => [...prev, imageURL]);
      });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: attachments,
    };
    await postMessage(reqBody);
    setText("");
    setAttachments([]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          endAdornment={
            <InputAdornment position="end">
              <label for="file-input">
                <img
                  style={{
                    cursor: "pointer",
                    filter:
                      "invert(95%) sepia(5%) saturate(166%) hue-rotate(182deg) brightness(83%) contrast(82%)",
                  }}
                  src={contentCopyIcon}
                />
              </label>
              <input
                style={{ display: "none" }}
                id="file-input"
                type="file"
                onChange={(e) => uploadImage(e.target.files[0])}
              />
            </InputAdornment>
          }
          onChange={handleChange}
        />
      </FormControl>
    </form>
  );
};

export default Input;
