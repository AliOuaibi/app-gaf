import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
const FeatureOne = () => {
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
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
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
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
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
      {/* feature area start */}
      <div className='container'>
        <div className='feature-area mb-60'>
          <div className='row'>
            <div className='col-lg-4'>
              <div className='section-title mb-0'>
                <h4 className='subtitle'>CARACTÉRISTIQUES</h4>
                <h2 className='title'>NOS PRESTATIONS</h2>
              </div>
            </div>
            <div className='col-lg-6 align-self-center'>
              <div className='section-title'>
                <p className='content left-line'>
                  Spécialisés dans le transport en semi-remorques et caisses mobiles sur des lignes régulières à
                  travers la France, nous intervenons principalement pour la messagerie, le colis, et la distribution.
                  Notre expertise repose sur près de 5 ans d'engagement, de rigueur, d’exigence, de réactivité,
                  et de respect des délais.
                </p>
              </div>
            </div>
          </div>
          <div className='feature-slider owl-carousel'>
            <Slider {...settings}>
              <div className='item'>
                <div className='feature-wrap bg-pink'>
                  <div className='icon'>
                    <img src='assets/img/icon/truck-icon2.png' alt='GAF'/>
                  </div>
                  <h5>TRANSPORT EN PORTE-CAISSE MOBILE</h5>
                  <p>
                    Le transport en porte-caisse mobile facilite le déplacement rapide
                    et sécurisé des marchandises, tout en optimisant l'espace de stockage et les coûts logistiques.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-ash'>
                  <div className='icon'>
                    <img src='assets/img/icon/truck-icon.png' alt='GAF'/>
                  </div>
                  <h5>TRANSPORT EN SEMI REMORQUE</h5>
                  <p>
                    Le transport en semi-remorque offre une solution flexible et efficace
                    pour le transport de gros volumes de marchandises sur de longues distances.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-sky'>
                  <div className='icon'>
                    <img src='assets/img/icon/rent-icon.png' alt='GAF'/>
                  </div>
                  <h5>LOCATION DE VÉHICULE AVEC OU SANS CONDUCTEUR</h5>
                  <p>
                    La location de véhicules avec ou sans conducteur vous permet de choisir
                    la solution la mieux adaptée à vos besoins, pour une totale liberté de transport.
                  </p>
                </div>
              </div>
              <div className='item'>
                <div className='feature-wrap bg-sky'>
                  <div className='icon'>
                    <img src='assets/img/icon/formation.png' alt='GAF'/>
                  </div>
                  <h5>FORMATION CERTIFIÉE</h5>
                  <p>
                    Devenez expert en transport poids lourd avec notre formation certifiée.
                    Profitez d'un enseignement pratique et théorique de qualité pour acquérir
                    les compétences nécessaires et obtenir une certification reconnue.
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
      {/* feature area end */}
    </>
  );
};

export default FeatureOne;
