import React, { Component } from 'react'
import {Box} from 'gestalt'

class Banner extends Component {
    render() {
        return (
            <Box color="transparent" shape="roundedBottom" marginBottom={5}>
            <img style={style.image} src="../static/joker.png" loading="lazy" alt="joker"/>
            </Box>
        )
    }
}

const style = {
    image:{
        height:"auto",
        width:"100%"
    },
    transparentToWhite : {
        "background": "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 30%, #fff 100%)!important",
    }
}

export default Banner;
