import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import roseImage from './Images/Rose_v2.jpg'


const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
    width: 100,
    height: 100,
    margin: 10
  },
  title: {
  flexGrow: 1
  },
  appBar: {
    boxShadow: 'none'
    
  },
  buttonColor: {
    color: '#a1887f',
    paddingBottom: 50
  }
}));

 function TheMenu() {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" color = 'inherit' className={classes.appBar}>
        <Toolbar>
          <Avatar edge="start" alt = 'Rose' src = {roseImage} className={classes.menuButton} >
            <MenuIcon />
          </Avatar>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <div className = {classes.buttonColor}>
          <Button>About</Button>
          <Button>Portfolio</Button>
          <Button>Current Work</Button>
          <Button>Blog</Button>
          <Button>Contact</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}




export default TheMenu