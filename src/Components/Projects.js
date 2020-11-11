import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RightPane from './rightPane'
import LeftPane from './leftPane'
import DevTools from './devTools'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40,
    marginBottom: 20
  },
  portfolioImage: {
    height: "auto"
  },
  toolImage: {
    width: 80,
    height: 80
  },
  gridList: {
    width: 330,
    height: 110
  },
  buttonColor: {
    backgroundColor: '#a1887f',
    textTransform: 'none',
    margin: 3
  },
  Iconbutton: {
    "&:hover": {
      backgroundColor: 'transparent'
    } 
  },
  devBox : {
     display: 'flex',
     justifyContent: 'center'
  },
  linkBox : {
      display: 'flex',
      justifyContent: 'center'
  },
  imageBox : {
    display: 'flex',
    justifyContent: 'center'
  }
}));

export default function (props) {
  const classes = useStyles();
  return (
    <Grid container
     className = {classes.root}
     justify = 'center' id = 'portfolio'>
    <LeftPane styles = {useStyles} portfolio = {props.portfolio.images}/>
    <RightPane styles = {useStyles} portfolio = {props.portfolio}/>
    <DevTools styles = {useStyles} devIcons = {props.portfolio.devTools} applink = {props.portfolio.link} githublink = {props.portfolio.githublink} />
    </Grid>
  )
}