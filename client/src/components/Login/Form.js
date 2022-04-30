import React, { useState } from "react";
import {
  Grid,
  Typography,
  FormControl,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LoginSignUpButton from "./LoginSignUpButton";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginTop: "2vh",
    paddingTop: "2vh",
    width: "390px",
    [theme.breakpoints.between("xs", "sm")]: {
      marginRight: "16vw",
      width: "350px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "70vw",
    },
  },
  forgotPassword: {
    color: theme.palette.primary.main,
    fontSize: "12px",
  },
}));

const Form = ({ form, handler, formErrorMessage }) => {
  const classes = useStyles();

  const [formState, setFormState] = useState({ email: "", password: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  if (form === "login") {
    return (
      <form onSubmit={handler}>
        <FormControl margin="normal" required>
          <TextField
            className={classes.textField}
            aria-label="E-mail address"
            label="E-mail address"
            name="email"
            type="text"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl margin="normal" required>
          <TextField
            className={classes.textField}
            label="Password"
            aria-label="Password"
            type="Password"
            name="Password"
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <Typography className={classes.forgotPassword}>
                  Forgot?
                </Typography>
              ),
              classes: {
                adornedEnd: classes.adornedEnd,
              },
            }}
          />
        </FormControl>
        <LoginSignUpButton text="Login" />
      </form>
    );
  } else {
    return (
      <form onSubmit={handler}>
        <Grid>
          <Grid>
            <FormControl>
              <TextField
                className={classes.textField}
                aria-label="username"
                label="Username"
                name="username"
                type="text"
                required
              />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl>
              <TextField
                className={classes.textField}
                label="E-mail address"
                aria-label="e-mail address"
                type="email"
                name="email"
                required
              />
            </FormControl>
          </Grid>
          <Grid>
            <FormControl error={!!formErrorMessage.confirmPassword}>
              <TextField
                className={classes.textField}
                aria-label="password"
                label="Password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="password"
                required
              />
              <FormHelperText>
                {formErrorMessage.confirmPassword}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid>
            <FormControl error={!!formErrorMessage.confirmPassword}>
              <TextField
                className={classes.textField}
                label="Confirm Password"
                aria-label="confirm password"
                type="password"
                inputProps={{ minLength: 6 }}
                name="confirmPassword"
                required
              />
              <FormHelperText>
                {formErrorMessage.confirmPassword}
              </FormHelperText>
            </FormControl>
          </Grid>
          <LoginSignUpButton text="Create" />
        </Grid>
      </form>
    );
  }
};

export default Form;
