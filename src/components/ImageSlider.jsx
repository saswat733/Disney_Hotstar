import React,{useEffect} from 'react'
// import $ from 'jquery'; // Import jQuery
import Slider from 'react-slick'; // 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './imageSlider.css'
const ImageSlider = () => {
    const settings = {
        dots:true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
      };
      
      return (
          <Slider className='custom-slider' {...settings}>
          <div>
            <a href="#">
            <img src="../../public/images-20231223T175511Z-001/images/slider-badag.jpg" alt="" />
            </a>
          </div>
          <div>
            <a href="#">
            <img src="../../public/images-20231223T175511Z-001/images/slider-badging.jpg" alt="" />
            </a>
          </div>
          <div>
            <a href="#">
            <img src="../../public/images-20231223T175511Z-001/images/slider-scale.jpg" alt="" />
            </a>
          </div>
          <div>
            <a href="#">
            <img src="../../public/images-20231223T175511Z-001/images/slider-scales.jpg" alt="" />
            </a>
          </div>
          
        </Slider>
  )
}

export default ImageSlider