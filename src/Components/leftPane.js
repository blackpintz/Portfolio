import React from 'react'
import {Grid, Box} from '@material-ui/core'
import uuid from 'uuid/v1'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function (props) {
    return (
        <Grid item xs ={12} sm = {8} lg = {4}>
        <Box>
        <Carousel showThumbs = {false} showStatus = {false}>
            {props.portfolio.map(image => (
              <div key = {uuid()}>
              <img alt = "cool" src = {image} className = {props.styles().portfolioImage} />
              </div>
            ))}
        </Carousel>
        </Box>
        </Grid>
    )
}