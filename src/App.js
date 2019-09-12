import React from 'react';
import './App.css';
import TheMenu from './Components/Navbar'
import Projects from './Components/Projects'
import Tools from './Components/Tools'
import Footer from './Components/Footer'
import { withStyles } from '@material-ui/core/styles'
import {Box, CssBaseline} from '@material-ui/core';
import {portfolioStore} from './store'

const styles = (theme => ({
  '@global': {
    'html, body, #root': {
      height: '100%',
      backgroundColor: '#fff8e1'
      
    }
   
  }
}))
function App(props) {
  return (
    <Box>
    <CssBaseline />
     <TheMenu />
     {portfolioStore.Portfolios.map(p => (
      <Projects key = {p.id} portfolio = {p} />
     ))}
     <Tools />
     <Footer />
    </Box>
  );
}


export default withStyles(styles)(App);
