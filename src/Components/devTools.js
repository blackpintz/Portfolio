import React from 'react'
import {Box, Button, Tooltip, GridList, GridListTile} from '@material-ui/core'
import uuid from 'uuid/v1'

export default function  DevTools(props) {
    return (
        <Box component = 'div'>
        <Box className = {props.styles().imageBox} mt = {2}>
        <GridList cellHeight={80} spacing = {2} className={props.styles().gridList} cols={4}>
        {props.devIcons.map(tool => (
          <Tooltip title = {tool.name} key = {uuid()}> 
          <GridListTile cols={1}>
            <img src={tool.image} alt='tool' />
          </GridListTile>
          </Tooltip> 
        ))}
        </GridList>
        </Box>
        <Box className = {props.styles().linkBox}>
        <Button className = {props.styles().buttonColor} href = 'http://palette-n-shades.com' target  = '_blank' rel="noreferrer">Visit site</Button>
        <Button className = {props.styles().buttonColor} href = 'https://github.com/blackpintz/palette-n-shades' target  = '_blank' rel="noreferrer">View source</Button>
        </Box>
        </Box>
    )
}