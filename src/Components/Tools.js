import React from 'react'
import {Box, Typography, IconButton} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import aws from '../Images/aws_icon.svg'
import git from '../Images/git_icon.svg'
import vs from '../Images/vs_icon.svg'
import dg from '../Images/dg_icon.svg'

const toolStyles = makeStyles (() => ({
    toolImages: {
      height: 100,
      width: 100,
      margin: 10
    }
  }))

function Tools()  {
    const classes = toolStyles()
        return (
            <div>
            <Box component = 'div' display = 'flex' justifyContent = 'center' mt = {20}>
            <Typography variant = 'h4'>Tools I use</Typography>
            </Box>
            <Box component = 'div' display = 'flex' justifyContent = 'center'>
            <IconButton disabled = {true}>
            <img alt = 'aws' src = {aws} className = {classes.toolImages}/>
            </IconButton>
            <IconButton disabled = {true}>
            <img alt = 'dg' src = {dg} className = {classes.toolImages}/>
            </IconButton>
            <IconButton disabled = {true}>
            <img alt = 'git' src = {git} className = {classes.toolImages}/>
            </IconButton>
            <IconButton disabled = {true}>
            <img alt = 'vs' src = {vs} className = {classes.toolImages}/>
            </IconButton>
            </Box>
            </div>
        )
}

export default Tools