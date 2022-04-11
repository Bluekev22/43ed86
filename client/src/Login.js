import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Grid,
  Box,
  Typography,
  FormControl,
  TextField,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import SideCard from './components/Login/SideCard'
import LinkBtn from './components/Login/LinkButton'
import LoginButton from './components/Login/LoginButton'

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: 'row',
    alignItems: 'stretch',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('lg')]: {
      justifyContent: 'space-between',
    },
  },

  accountQuestion: {
    fontSize: '14px',
    marginTop: '6vh',

    color: theme.palette.secondary.main,
    textAlign: 'center',
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
    <Grid container className={classes.root}>
      <Grid container item xl={4} lg={4} md={3} sm={12}>
        <SideCard />
      </Grid>
      <Grid
        container
        item
        xl={4}
        lg={7}
        md={6}
        sm={12}
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
          //   spacing={4}
        >
          <Grid item xl={4} lg={3} md={5} sm={4} xs={9}>
            <Typography className={classes.accountQuestion}>
              Don't have an account?
            </Typography>
          </Grid>
          <Grid item xl={4} lg={4} md={5} sm={6} xs={9}>
            <LinkBtn href="/register" text="Create account" />
          </Grid>
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
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Login
