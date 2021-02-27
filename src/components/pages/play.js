import React from 'react';
import Gallery from 'react-photo-gallery'

//image links
import chips from '../../assets/img/play/chips.gif';
import fan from '../../assets/img/play/fan-1.png';
import plasticWrap from '../../assets/img/play/cloth-1.png';
import everydayJob from '../../assets/img/play/everydayJob.gif';
import blob from '../../assets/img/play/blob.jpg';
import eraser from '../../assets/img/play/eraser.gif';
import basketball from '../../assets/img/play/basketball.gif';
import fbnews from '../../assets/img/play/fbnews.jpg';
import legion from '../../assets/img/play/legion.png';
import notification from '../../assets/img/play/notification.gif';

const photos = [

        {
        src: eraser,
        width: 1,
        height: 1
         },
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
        src:legion,
        width: 1,
        height: 1
        },
        {
        src:fbnews,
        width: 1,
        height: 1
        },
        {
        src: everydayJob,
        width: 1,
        height: 1
        },
        {
        src: blob,
        width: 1,
        height: 1
        },   
        {
        src: notification,
        width: 1,
        height: 1
        },     
        
      ];



export default function Play() {
        return (
                <div>Hello world</div>,
                <Gallery photos={photos} direction={"column"}/>
        );
      }
