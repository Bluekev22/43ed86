import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import LinkButton from './LinkButton'

const useStyles = makeStyles((theme) => ({
  linkContainer: {
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '4vh',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'space-around',
    },
  },
  accountQuestion: {
    fontSize: '14px',
    marginTop: '6vh',
    color: theme.palette.secondary.main,
    [theme.breakpoints.up('sm')]: {
      textAlign: 'end',
      marginRight: '3vw',
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'end',
      marginRight: '4vw',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      justifyContent: 'space-around',
      marginRight: '0vw',
      marginTop: '8vh',
    },
  },
}))

const LinkContainer = ({ href, text, question }) => {
  const classes = useStyles()
  return (
    <Grid container item className={classes.linkContainer}>
      <Grid item xl={6} lg={5} md={6} sm={4} xs={12}>
        <Typography className={classes.accountQuestion}>{question}</Typography>
      </Grid>
      <Grid item xl={4} lg={4} md={5} sm={4} xs={12}>
        <LinkButton href={href} text={text} />
      </Grid>
    </Grid>
  )
}

export default LinkContainer
