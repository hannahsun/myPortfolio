import React from 'react'
import ReactPlayer from 'react-player'
import "../style/responsive-player.css"


const ResponsivePlayer = ({ url }) => {
    return(
    <div className='player-wrapper'>
        <ReactPlayer   
            className = "react-player"
            url= {url}
            width= "100%"
            height= "100%"
        />
    </div>
    )
}

export default ResponsivePlayer;
