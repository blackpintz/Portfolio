import React from 'react'
import {Grid, Box, IconButton, Button, Tooltip} from '@material-ui/core'
import uuid from 'uuid/v1'

export default function  DevTools(props) {
    return (
        <Grid item  xs = {12}>
        <Box component = 'div' className = {props.styles().devBox}>
        {props.devIcons.map(tool => (
                <Tooltip title = {tool.name} key = {uuid()}>
            <IconButton mt = {2} className = {props.styles().Iconbutton}>
           <img  alt = 'tool' src ={tool.image} className = {props.styles().toolImage} /> 
           </IconButton>
           </Tooltip>
        ))} 
        </Box>
        <Box className = {props.styles().linkBox}>
        <Button className = {props.styles().buttonColor} href = 'http://palette-n-shades.com' target  = '_blank' rel="noreferrer">Visit site</Button>
        <Button className = {props.styles().buttonColor} href = 'https://github.com/blackpintz/palette-n-shades' target  = '_blank' rel="noreferrer">View source</Button>
        </Box>
        </Grid>
    )
}