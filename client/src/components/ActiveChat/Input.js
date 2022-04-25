import React, { useState } from "react";
import axios from "axios";
import { FormControl, FilledInput, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import contentCopyIcon from "../../assets/contentCopyIcon.svg";
import Preview from "./Preview";
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
  fileIcon: {
    cursor: "pointer",
    filter:
      "invert(95%) sepia(5%) saturate(166%) hue-rotate(182deg) brightness(83%) contrast(82%)",
  },
  fileInput: {
    display: "none",
  },
}));

const Input = ({ otherUser, conversationId, user, postMessage }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [previewSource, setPreviewSource] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const uploadImage = async (file) => {
    setAttachments((prev) => [...prev, file]);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource((prev) => [...prev, reader.result]);
    };
  };

  const getImages = async () => {
    const CLOUD_CREDENTIALS = process.env.REACT_APP_CLOUD_CREDENTIALS;

    return Promise.all(
      attachments.map(async (attachment) => {
        const formData = new FormData();
        formData.append("file", attachment);
        formData.append("upload_preset", CLOUD_CREDENTIALS);
        try {
          const { data } = await axios({
            method: "post",
            url: "https://api.cloudinary.com/v1_1/kevinshank/image/upload",
            data: formData,
            transformRequest: [
              (data, headers) => {
                delete headers["x-access-token"];
                return data;
              },
            ],
          });
          return data;
        } catch (err) {
          console.error(err);
        }
      })
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formElements = form.elements;

    const results = await getImages();
    const images = results.map((file) => {
      return file.secure_url;
    });

    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: formElements.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: images,
    };
    await postMessage(reqBody);
    setText("");
    setAttachments([]);
    setPreviewSource([]);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Preview previewSource={previewSource} />
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          endAdornment={
            <InputAdornment position="end">
              <label htmlFor="file-input">
                <img
                  className={classes.fileIcon}
                  src={contentCopyIcon}
                  alt=""
                />
              </label>
              <input
                className={classes.fileInput}
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
