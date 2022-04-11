import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  linkButton: {
    boxShadow: '0px 2px 12px rgba(74,106,149, 0.2)',
    borderRadius: '5px',
    color: theme.palette.primary.main,
    width: '170px',
    height: '54px',
    marginTop: '42px',
    marginRight: '42px',
  },
}))

const LinkButton = ({ href, text }) => {
  const classes = useStyles()
  return (
    <Grid item>
      <Link style={{ textDecoration: 'none' }} href={href} to={href}>
        <Button className={classes.linkButton}>{text}</Button>
      </Link>
    </Grid>
  )
}

export default LinkButton
