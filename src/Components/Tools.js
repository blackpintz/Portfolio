import React from 'react'
import {Box, Typography, GridList, GridListTile} from '@material-ui/core'
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
    },
    gridList: {
      width: 350,
      height: 100
    }
  }))

function Tools()  {
    const classes = toolStyles()
        return (
            <Box>
            <Box component = 'div' display = 'flex' justifyContent = 'center' mt = {10}>
            <Typography variant = 'h4'>Tools I use</Typography>
            </Box>
            <Box display = 'flex' justifyContent = 'center' mt = {2}>
            <GridList cellHeight = {80} className = {classes.gridList} cols = {4}>
            <GridListTile cols={1}>
            <img src={aws} alt='aws' />
            </GridListTile>
            <GridListTile cols={1}>
            <img src={dg} alt='dg' />
            </GridListTile>
            <GridListTile cols={1}>
            <img src={git} alt='git' />
            </GridListTile>
            <GridListTile cols={1}>
            <img src={vs} alt='vs' />
            </GridListTile>
            </GridList>
            </Box>
            </Box>
        )
}

export default Tools