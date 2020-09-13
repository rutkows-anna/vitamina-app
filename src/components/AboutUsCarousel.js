import React from 'react';
import "./AboutUsCarousel.css";

import Leaf from './image/leaf.jpeg'
import Meditation from './image/modal.jpg'
import Healthy from './image/stay_healthy.jpg'
import { makeStyles } from '@material-ui/core';


const ImageCarousel = () => {

  const Images = [
    {id: 0, url: {Meditation} },
    {id: 1, url: {Healthy} },
  ]

  const styles = {

    imgContainer: {
      width: '100%', 
      height: '70%', 
      margin: '0%', 
      overflow: 'hidden'
    },

    carouselImg: {
      display: 'block', 
      width: '150%', 
      height: '70%',
      margin: '-10% 0% 0% -35%'}
  } 

const classes = styles;

  return (

    <figure className='imgContainer' style={styles.imgContainer}>
      <img src={Leaf} alt={"Side picture - well-being"} style={styles.carouselImg} />
    </figure>
  )
}

export default ImageCarousel;