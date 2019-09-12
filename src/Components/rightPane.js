import React from 'react'
import {Grid, Box, Link} from '@material-ui/core'


export default function (props) {
    console.log(props)
    return (
        <Grid item lg= {3} sm = {8} xs= {12}>
        <Box 
        fontSize = {30}
        ml = {2}>
        <Link href = 'https://palette-n-shades.com' target = '_blank' rel="noreferrer">{props.portfolio.link}</Link>
        </Box>
        <Box 
        fontSize = {18} 
        ml = {2}
        color = '#3e2723'>
        {props.portfolio.description}
        </Box>
        <Box 
        mt = {1}
        ml = {2}
        fontSize = 'h6.fontSize'
        color = '#3e2723'>
        Technology
        </Box>
        <Box
        fontSize = {16}
        ml = {2}
        color = '#3e2723'>
        {props.portfolio.technologies}
        </Box>
        </Grid>
    )
}