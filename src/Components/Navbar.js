import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box, Avatar, Link, Breadcrumbs} from '@material-ui/core'
import roseImage from '../Images/Rose_v2.jpg';
import twitterIcon from '../Images/twitter.svg'
import githubIcon from '../Images/github.svg'
import mediumIcon from '../Images/medium.svg'
import linkedIn from '../Images/linkedin.svg'

const navStyles = makeStyles (theme => ({
  roseAvatar: {
    height: 200,
    width: 200
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  breadcumb: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10
  },
  chat: {
    marginRight: 10
  }
}))

export default function TheMenu() {
  const classes = navStyles()
  return (
    <div id = 'about'>
    <Box 
    display = 'flex'
    justifyContent = 'center'
    height = '52%'
    mt={1}
    pb={2}
    alignItems = 'center'
    flexDirection = 'column'>
    <Avatar alt = 'Rose' src = {roseImage} className = {classes.roseAvatar}/>
    <Typography component = 'div'>
    <Box
    fontWeight="fontWeightBold"
    mt = {1}
    fontSize = 'h4.fontSize'
    color = '#3e2723'
    textAlign = 'center'
    >
    Rose Wanjohi
    </Box>
    <Box 
    textAlign = 'center'
    mx='auto'
    width='54%'>
    Hi, I am Rose, a Full-stack Engineer experienced in Javascript, React and Ruby on Rails. Please have a look at my project portfolio and reach out to me if you have any questions or would like to hire me.
    </Box>
    <Box 
    mt={1}
    display="flex"
    justifyContent="center"
    >
    <Typography className = {classes.chat}>Let's chat: </Typography>
    <Link >rosewanjohi24@gmail.com</Link>
    </Box>
      <Breadcrumbs  separator = '' aria-label = 'bread-crumb' className = {classes.breadcumb}>
        <a href = 'https://www.linkedin.com/in/rosewanjohi/' target = '_blank' rel="noopener noreferrer">
        <img alt = 'linkedin' src = {linkedIn} className = {classes.imgIcon}/>
        </a>
        <a href = 'https://twitter.com/blackpintz' target = '_blank' rel="noopener noreferrer">
        <img alt = 'twitter' src = {twitterIcon} className = {classes.imgIcon}/>
        </a>
        <a href = 'https://github.com/blackpintz' target = '_blank' rel="noopener noreferrer">
        <img alt = 'github' src = {githubIcon} className = {classes.imgIcon}/>
        </a>
        <a href = 'https://medium.com/@blackpintz' target = '_blank' rel="noopener noreferrer">
        <img alt = 'github' src = {mediumIcon} className = {classes.imgIcon}/>
        </a>
      </Breadcrumbs>
    </Typography>
    </Box>
    </div>
  )
}