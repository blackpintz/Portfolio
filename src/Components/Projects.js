import React from 'react'
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RightPane from './rightPane'
import LeftPane from './leftPane'
import DevTools from './devTools'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40,
  },
  portfolioImage: {
    width: 300,
    height: 300
  },
  toolImage: {
    width: 80,
    height: 80
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
  }
}));

// const imgArr = portfolioStore.Portfolios.reduce((accumulator, currentValue) => {
//   return [...accumulator, ...currentValue.images]
// }, [])
export default function (props) {
  const classes = useStyles();
  return (
    <Grid container
     className = {classes.root}
     justify = 'center' id = 'portfolio'>
    <LeftPane styles = {useStyles} portfolio = {props.portfolio.images}/>
    <RightPane styles = {useStyles} portfolio = {props.portfolio}/>
    <DevTools styles = {useStyles} devIcons = {props.portfolio.devTools} />
    </Grid>
  )
}