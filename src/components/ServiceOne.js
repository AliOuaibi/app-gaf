import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceOne = () => {
  return (
    <>
      {/* service area start */}
      <div
        className='service-area pd-top-115 pd-bottom-90 pb-lg-0'
        style={{ background: "url(assets/img/service/bg.png)" }}
      >
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle style-2'>SERVICES</h4>
                <h2 className='title'>NOTRE SERVICE POUR VOUS</h2>
                <p>
                  Découvrez notre expertise à travers des services de transport poids lourd,
                  location flexible de véhicules, formation spécialisée,
                  et une assistance personnalisée.
                  Nous sommes dédiés à répondre à vos besoins avec professionnalisme et efficacité.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/service1.png' alt='GAF' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-1.svg'
                      alt='GAF'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>Conformité réglementaire</h5>
                  <p>
                    Tous nos poids lourds respectent les normes de sécurité et les régulations en vigueur,
                    vous assurant une conformité totale et une tranquillité d'esprit.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/service2.png' alt='GAF' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-.png'
                      alt='GAF'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>Service Client Personnalisé</h5>
                  <p>
                    Notre équipe dédiée vous aide à choisir le véhicule le mieux adapté à vos besoins et
                    vous fournit un support complet tout au long de la période de location.
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/service-3.png' alt='GAF' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-.png'
                      alt='GAF'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>Programmes Adaptés</h5>
                  <p>
                    Nous offrons des formations personnalisées pour les conducteurs et les professionnels
                    du transport, couvrant les meilleures pratiques et les exigences réglementaires.
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* service area end */}
    </>
  );
};

export default ServiceOne;
