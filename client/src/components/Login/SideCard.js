import React from 'react'
import { Grid, Box, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import bgImage from '../../assets/bgImage.png'
import bubble from '../../assets/bubble.svg'

const useStyles = makeStyles(() => ({
  bgImage: {
    position: 'relative',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'linear-gradient(180deg, #3A8DFF 0%, #86B9FF 100%)',
    opacity: 0.85,
  },
  textBubble: {
    position: 'absolute',
    top: '28%',
    left: '42%',
  },
  imageCaption: {
    position: 'absolute',
    top: '43.5%',
    left: '12.5%',
    height: 100,
    width: '75%',
    color: 'white',
    fontWeight: '400',
    fontSize: '26px',
    textAlign: 'center',
    lineHeight: '40px',
  },
}))

const SideCard = () => {
  const classes = useStyles()
  return (
    <Grid item>
      <Box className={classes.bgImage}>
        <Box className={classes.imageOverlay}></Box>
        <img src={bgImage} alt="People texting" />
        <Box className={classes.textBubble}>
          <img src={bubble} alt="Text bubble" />
        </Box>
        <Typography className={classes.imageCaption}>
          Converse with anyone with any language
        </Typography>
      </Box>
    </Grid>
  )
}

export default SideCard
