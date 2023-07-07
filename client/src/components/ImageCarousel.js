import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import i1 from '../images/1.jpg';
import i2 from '../images/2.jpg';
import i3 from '../images/3.jpg';
import i4 from '../images/4.jpg';
import i5 from '../images/5.jpg';



const ImageCarousel = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <div className="slick-prev">Previous</div>,
    nextArrow: <div className="slick-next">Next</div>,
  };

  return (
    <div className='slider-container'>
      <style>
        {`
        .slick-prev:before,
        .slick-next:before {
          color: black;
        }
        `}
      </style>

      <Slider {...settings} className='slider'>
        <div>
          <img src={i1} alt="Image 1" className='carosouel-img' />
        </div>
        <div>
          <img src={i2} alt="Image 2" className='carosouel-img' />
        </div>
        <div>
          <img src={i3} alt="Image 3" className='carosouel-img' />
        </div>
        <div>
          <img src={i4} alt="Image 3" className='carosouel-img' />
        </div>
        <div>
          <img src={i5} alt="Image 3" className='carosouel-img' />
        </div>
      </Slider>
    </div>
  );
};

export default ImageCarousel;
