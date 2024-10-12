import React from "react";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";
import Slider from "react-slick";

const PartnerOne = ({imgPartner, text}) => {
  function SampleNextArrow(props) {
    const {className, onClick} = props;
    return <FaArrowLeft className={className} onClick={onClick}/>;
  }

  function SamplePrevArrow(props) {
    const {className, onClick} = props;
    return <FaArrowRight className={className} onClick={onClick}/>;
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      {/*partner-area start*/}
      <div className='partner-area pd-top-90'>
        <div className='container'>
          {text
            &&
            <div className='row justify-content-center'>
              <div className='col-lg-7'>
                <div className='section-title text-center'>
                  <h2 className='title'>ON ROULE POUR EUX</h2>
                  <p className='content'>
                    Découvrez comment nous mettons notre expertise au service de nos clients en offrant des
                    solutions de transport sur mesure, alliant performance, fiabilité et respect de l'environnement.
                    Avec GAF, chaque trajet est une promesse de qualité et de satisfaction.
                  </p>
                </div>
              </div>
            </div>
          }

          <div className='partner-slider owl-carousel'>
            <Slider {...settings}>
              {imgPartner.map(({id, srcPartner, alt}) => (
                <div className='item' key={`logo-partner-${id}`}>
                  <div className='thumb'>
                    <img src={srcPartner} alt={`GAF-${alt}`}/>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {/*partner-area end*/}
    </>
  );
};

export default PartnerOne;
