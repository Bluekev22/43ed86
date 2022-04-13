import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Grid,
  Typography,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SideCard from './components/Login/SideCard';
import LinkContainer from './components/Login/LinkContainer';
import LoginButton from './components/Login/LoginButton';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('lg')]: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'stretch',
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  sideCardContainer: {
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      margin: 'auto',
    },
  },

  entireFormContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'flex-start',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

  loginContainer: {
    marginTop: '9vh',
    [theme.breakpoints.up('sm')]: {
      width: '390px',
      marginRight: '16vw',
    },
    [theme.breakpoints.down('sm')]: {
      width: '350px',
      marginRight: '2vw',
      marginLeft: '2vw',
      marginBottom: '12vh',
    },
    [theme.breakpoints.down('xs')]: {
      width: '70vw',
    },
  },

  loginStatement: {
    fontWeight: 600,
    fontSize: '26px',
    lineHeight: '40px',
    textAlign: 'Center',
  },

  textField: {
    marginTop: '2vh',
    paddingTop: '2vh',
    width: '390px',
    [theme.breakpoints.between('xs', 'sm')]: {
      marginRight: '16vw',
      width: '350px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '70vw',
    },
  },
  forgotPassword: {
    color: theme.palette.primary.main,
    fontSize: '12px',
  },
}));

const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();

  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container className={classes.root}>
      <Grid
        container
        item
        xl={4}
        lg={4}
        md={3}
        sm={12}
        xs={12}
        className={classes.sideCardContainer}
      >
        <SideCard />
      </Grid>
      <Grid
        container
        item
        xl={4}
        lg={7}
        md={6}
        sm={12}
        xs={12}
        className={classes.entireFormContainer}
      >
        <LinkContainer
          href="/login"
          text="Login"
          question="Already have an account?"
        />

        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item className={classes.loginContainer}>
            <Typography className={classes.loginStatement}>
              Create an Account
            </Typography>
            <form onSubmit={handleRegister}>
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
                <LoginButton text="Create" />
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Signup;
