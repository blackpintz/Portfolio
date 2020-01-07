import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Toolbar, AppBar, Typography, Breadcrumbs, Link} from '@material-ui/core'
import copyright from '../Images/copyright.svg'
import twitterIcon from '../Images/twitter.svg'
import githubIcon from '../Images/github.svg'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar : {
    backgroundColor: '#3e2723',
    top: 'auto',
    bottom: 0,
    right: 0
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
      marginBottom: 10
    }
  },
  links: {
   color: '#fafafa'
  },
  imgIcon: {
    width: 30,
    height: 30,
  },
  toolBar : {
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      flexDirection: 'column'
    }
  },
  breadCrumbs : {
    [theme.breakpoints.down('md')]: {
      marginBottom: 10,
      marginTop: 5
    }
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <AppBar position = 'static' className = {classes.appBar}>
        <Toolbar className = {classes.toolBar}>
        <Breadcrumbs separator = '|' aria-label = 'bread-crumb' className = {classes.breadCrumbs}>
        <Link href = '#about' className = {classes.links}>About</Link>
        <Link href = '#portfolio' className = {classes.links}>Portfolio</Link>
        </Breadcrumbs>
        <Typography variant = 'subtitle2' className = {classes.title}>Copyright<span><img alt = "copyright" src = {copyright} /></span>2019. Rose Wanjohi. All Rights Reserved.</Typography>
        <Breadcrumbs separator = '' aria-label = 'bread-crumb'>
        <a href = 'https://twitter.com/blackpintz' target = '_blank' rel="noopener noreferrer">
        <img alt = 'twitter' src = {twitterIcon} className = {classes.imgIcon}/>
        </a>
        <a href = 'https://github.com/blackpintz' target = '_blank' rel="noopener noreferrer">
        <img alt = 'github' src = {githubIcon} className = {classes.imgIcon}/>
        </a>
        </Breadcrumbs>
        </Toolbar>
      </AppBar>
  );
}

