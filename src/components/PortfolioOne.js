import React from "react";
import Slider from "react-slick";

const PortfolioOne = () => {

  const settings = {
    dots: false,
    arrows: false,
    speed: 1000,
    initialSlide: 1,
    autoplaySpeed: 5000,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    slidesToShow: 3,
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
      <div className='portfolio-area pd-top-60'>
        <div className='container' >
          <div className='mx-auto text-center' style={{marginBottom: '60px'}}>
            <div>
              <div>
                <h2 className='title' style={{color: '#47474a'}}>FAIRE MIEUX POUR DEMAIN,<br/> DÈS AUJOURD’HUI.</h2>
                <div style={{borderBottom: "10px solid #78B742", margin: "20px auto", width: "20%"}}></div>
                <h5 style={{color: '#78B742'}}>Que diriez-vous de concilier transport et mise au vert ?</h5>
                <p className='content'>
                  Soucieux de notre impact environnemental, nous nous sommes engagés dans la voie de
                  la transition écologique avec une double ambition : agir sans attendre et répondre à vos
                  préoccupations grandissantes sur le sujet. En pratique, cela nous conduit à réaliser chaque année
                  notre bilan carbone et à fixer des objectifs chiffrés pour réduire durablement notre consommation
                  de carburant et les émissions de gaz à effet de serre.
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
