import React from 'react';
import Gallery from 'react-photo-gallery'

const photos = [
        {
          src: 'https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg',
          width: 4,
          height: 3
        },
        {
          src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
          width: 1,
          height: 1
        },
        {
          src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
          width: 1,
          height: 1
        }
      ];



export default function Play() {
        return (
                <div>Hello world</div>,
                <Gallery photos={photos} />
        );
      }
