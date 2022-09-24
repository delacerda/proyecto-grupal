import React from 'react'
import { fotos } from "./CarruselFotos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { containerStyle, titleStyle, eachEstilo, fotoStyle } from './CarruselStyle';

const Carrusel = () => {

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1280,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 599,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
         ]
      }

  return (
  <div className={containerStyle}>
    <h3 className={titleStyle}>COMPARTI TUS FOTOS EN INSTAGRAM JUNTO A #LaFiguMasDificil</h3>
   <Slider {...settings}>

    {
        fotos.map(item => 
            <div className={eachEstilo} key={item.id}>
               
                <img className={fotoStyle} src={item.img} alt={item.id}></img>
               
            </div>

        )
    }
    </Slider>
    </div>
  )
}


export default Carrusel