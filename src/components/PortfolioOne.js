import React from "react";
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa";
import Slider from "react-slick";

const PortfolioOne = () => {
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <FaArrowLeft className={className} onClick={onClick} />;
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <FaArrowRight className={className} onClick={onClick} />;
  }
  const settings = {
    dots: false,
    arrows: true,
    speed: 1000,
    initialSlide: 1,
    autoplaySpeed: 5000,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      {/* portfolio area start */}
      <div
        className='portfolio-area pd-top-115'
        style={{ background: "url(assets/img/portfolio/bg.png)" }}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='section-title style-white'>
                <h4 className='subtitle style-2'>ÉCO RESPONSABLES</h4>
                <h2 className='title'>L'AVENIR DU TRANSPORT : EN ROUTE POUR L'ENVIRONNEMENT</h2>
                <p className='content'>
                  Optez pour l'avenir avec nos poids lourds écologiques :
                  une solution innovante pour un transport durable et performant.
                </p>
              </div>
            </div>
          </div>
          <div className='swiper-container'>
            {/* Additional required wrapper */}
            <div className='swiper-wrapper'>
              {/* Slides */}
              <Slider {...settings}>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/gaf-1.png' alt='GAF'/>
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <h4>Objectif</h4>
                        <p>
                          Notre objectif est de proposer un transport routier respectueux de l'environnement.
                          Certains camions de notre flotte roulent à l'Oléo 100. Un carburant alternatif et propre,
                          enntièrement
                          MADE IN FRANCE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/conducteur.png' alt='GAF'/>
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <h4>Conducteurs</h4>
                        <p>
                          Nos conducteurs sont formées à l'écoconduite, réduisant ainsi les coûts et
                          les rejets polluants.
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/2030.png' alt='GAF'/>
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <h4>2030</h4>
                        <p>
                          Nous projetons de doubler la flotte et garantir 100% de flotte « verte » à l'horizon 2030,
                          atteignant ainsi une croissance au niveau régional avec l'ouverture de nouveaux
                          centres logistiques.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='swiper-slide'>
                  <div className='single-portfolio-wrap'>
                    <div className='thumb'>
                      <img src='assets/img/portfolio/oleo.png' alt='Certification'/>
                    </div>
                    <div className='portfolio-details'>
                      <div className='details'>
                        <h4>Certification Écologique</h4>
                        <p>
                          Nos poids lourds sont certifiés selon les normes écologiques les plus strictes, garantissant
                          une réduction significative de l'empreinte carbone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* portfolio area end */}
    </>
  );
};

export default PortfolioOne;
