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
        <Button className = {props.styles().buttonColor} href = {props.applink} target  = '_blank' rel="noreferrer">Visit site</Button>
        <Button className = {props.styles().buttonColor} href = {props.githublink} target  = '_blank' rel="noreferrer">View source</Button>
        </Box>
        </Box>
<<<<<<< HEAD
=======
        </Box>
>>>>>>> a668ca2dbcc17d4d7741d152d5b9766f8cbd5cf7
    )
}