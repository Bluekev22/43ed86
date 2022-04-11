import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SideCard from './components/Login/SideCard'
import LinkBtn from './components/Login/LinkButton'
import LoginButton from './components/Login/LoginButton'

const useStyles = makeStyles((theme) => ({
  accountQuestion: {
    marginTop: '42px',
    color: theme.palette.secondary.main,
  },
  loginStatement: {
    fontWeight: 600,
    fontSize: '26px',
    lineHeight: '40px',
  },
  loginBox: {
    width: '390px',
    marginRight: '16vw',
  },
  textField: {
    width: '390px',
    marginTop: '2vh',
    paddingTop: '2vh',
  },
  forgotPassword: {
    color: theme.palette.primary.main,
    fontSize: '12px',
  },
}))

const Login = ({ user, login }) => {
  const classes = useStyles()
  const history = useHistory()

  const handleLogin = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formElements = form.elements
    const username = formElements.username.value
    const password = formElements.password.value

    await login({ username, password })
  }

  useEffect(() => {
    if (user && user.id) history.push('/home')
  }, [user, history])

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <Grid container item xl={3} lg={3} md={3} sm={12}>
        <SideCard />
      </Grid>
      <Grid
        container
        item
        xl={9}
        lg={7}
        md={6}
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid
          container
          item
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Typography className={classes.accountQuestion}>
              Don't have an account?
            </Typography>
          </Grid>
          <LinkBtn href="/register" text="Create account" />
        </Grid>
        <Grid
          container
          item
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box mt={9} className={classes.loginBox}>
            <Typography className={classes.loginStatement}>
              Welcome back!
            </Typography>
            <form onSubmit={handleLogin}>
              <FormControl margin="normal" required>
                <TextField
                  className={classes.textField}
                  aria-label="E-mail address"
                  label="E-mail address"
                  name="E-mail address"
                  type="text"
                />
              </FormControl>
              <FormControl margin="normal" required>
                <TextField
                  className={classes.textField}
                  label="Password"
                  aria-label="Password"
                  type="Password"
                  name="Password"
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
              <LoginButton text="Login" />
            </form>
          </Box>
          {/* 
          <Box>
            <Grid container item xl={8} lg={8}>
              <Typography>Need to register?</Typography>
              <Link href="/register" to="/register">
                <Button>Register</Button>
              </Link>
            </Grid>
            <form onSubmit={handleLogin}>
              <Grid>
                <Grid>
                  <FormControl margin="normal" required>
                    <TextField
                      aria-label="username"
                      label="Username"
                      name="username"
                      type="text"
                    />
                  </FormControl>
                </Grid>
                <FormControl margin="normal" required>
                  <TextField
                    label="password"
                    aria-label="password"
                    type="password"
                    name="password"
                  />
                </FormControl>
                <Grid>
                  <Button type="submit" variant="contained" size="large">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box> */}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
