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
    About Rose Wanjohi
    </Box>
    <Box 
    textAlign = 'center'
    mx='auto'
    width='75%'>
    Hi, I am Full-stack Engineer with a background in Actuarial Science and Sales. After my job contract as a Sales Manager ended, I went on a career hunt. I had been curious about online careers, so I started there. I discovered web development while trying out affiliate marketing. The owner of the course said I needed money to make money and suggested a few online jobs I could do on the side while I worked as an affiliate marketer. One job he recommended was web development. After taking a few courses in Javascript and React, I knew this is what I wanted to do for the rest of my life. It has been 2years+ since my journey began. I work as a Technical Support Engineer at Microverse. In my free time, I continue to build my skills as a developer and write articles on what I think have debugged that the internet hasn’t... yet.
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