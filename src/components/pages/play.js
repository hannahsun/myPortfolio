import React from 'react';
import Gallery from 'react-photo-gallery';

// import Grid from '@material-ui/core/Grid';
// import { makeStyles, MuiThemeProvider} from '@material-ui/core/styles';
// import { MuiThemeProvider as V0MuiThemeProvider} from '@material-ui/core'
// import Image from '../elements/imageContainer.js';
// import mytheme from '../../style/mytheme.js'

// import HoverVideoPlayer from 'react-hover-video-player';

//image links
import chips from '../../assets/img/play/chips.gif';
import fan from '../../assets/img/play/fan-1.png';
import plasticWrap from '../../assets/img/play/cloth-1.png';
import blob from '../../assets/img/play/blob.jpg';
import eraser from '../../assets/img/play/eraser.gif';
import basketball from '../../assets/img/play/basketball.gif';
import legion1 from '../../assets/img/play/legion.png';
import notification from '../../assets/img/play/notification.gif';
import legionGif1 from '../../assets/img/play/legion-2.gif';
import pencil from '../../assets/img/play/pencil.gif';

//video links
// import pencilVideo from '../../assets/img/play/pencil.mp4';
// import chipVideo from '../../assets/img/play/chips.mp4';
// import notificationVideo from '../../assets/img/play/notification.mp4';
// import legionVideo from '../../assets/img/play/legion-2.mp4';
// import basketballVideo from '../../assets/img/play/basketball.mp4';


const photos = [
        {
        src: eraser,
        width: 1,
        height: 1},
        {
        src: fan,
        width: 2,
        height: 2
        },
        {
        src: plasticWrap,
        width: 1,
        height: 1
        },
        {
        src: chips,
        width: 2,
        height: 2
        },
        {
        src:basketball,
        width: 1,
        height: 1
        },
        {
        src:legion1,
        width: 1,
        height: 1
        },
        {
        src:legionGif1,
        width: 1,
        height: 1
        },
        {
        src: pencil,
        width: 1,
        height: 1
        },  
        {
        src: notification,
        width: 1,
        height: 1
        },  
        {
        src: blob,
        width: 1,
        height: 1
        }, 
        
      ];



// const useStyles = makeStyles((theme) => ({
// root: {
//         //backgroundColor: 'red',
//         flexGrow: 1,
// },
// }));



const xs = 6;
const sm = 4;
const md = 4;
const lg = 3;


export default function Play() {
        // const classes = useStyles();
        return (
                <Gallery photos={photos} direction={"column"}/>

        );
      }
