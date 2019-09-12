import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Box, Avatar, Link} from '@material-ui/core'
import roseImage from '../Images/Rose_v2.jpg';

const navStyles = makeStyles (theme => ({
  roseAvatar: {
    height: 200,
    width: 200
  }
}))

export default function TheMenu() {
  const classes = navStyles()
  return (
    <div id = 'about'>
    <Box 
    display = 'flex'
    justifyContent = 'center'
    height = {400}
    alignItems = 'center'
    flexDirection = 'column'>
    <Avatar alt = 'Rose' src = {roseImage} className = {classes.roseAvatar}/>
    <Typography component = 'div'>
    <Box
    fontWeight="fontWeightBold"
    mt = {1}
    fontSize = 'h4.fontSize'
    color = '#3e2723'>
    Rose Wanjohi
    </Box>
    <Box textAlign = 'center'>Full stack web developer</Box>
    <Box textAlign = 'center'>
    <Link>rosewanjohi24@gmail.com</Link>
    </Box>
    </Typography>
    </Box>
    </div>
  )
}