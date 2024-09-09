import React from "react";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const AboutOne = () => {
  return (
    <>
      {/* about area start */}
      <div className='about-area pd-bottom-120'>
        <div className='container'>
          <div className='about-area-inner'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='about-thumb-wrap'>
                  <img
                    className='img-1'
                    src='./assets/img/about/shape.png'
                    alt='GAF'
                  />
                  <img
                    className='img-2'
                    src='./assets/img/about/gaf1.png'
                    alt='GAF'
                  />
                  <img
                    className='img-3'
                    src='./assets/img/about/gaf2.png'
                    alt='GAF'
                  />
                  <div className='exprience-wrap'>
                    <img src='./assets/img/about/shape-3.png' alt='GAF' />
                    <div className='details'>
                      <TrackVisibility once>
                        {({ isVisible }) =>
                          isVisible && (
                            <h1>
                              <CountUp delay={0} start={0} end={5} />
                            </h1>
                          )
                        }
                      </TrackVisibility>
                      <p>ANS D'ÉXPERIENCES</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-6 align-self-center'>
                <div className='about-inner-wrap'>
                  <div className='section-title mb-0'>
                    <h4 className='subtitle'>À PROPOS</h4>
                    <h2 className='title'>
                      BIENVENUE CHEZ GAF, VOTRE PARTENAIRE DE TRANSPORT
                    </h2>
                    <p className='content left-line'>
                      GROUPE A FRET, une entreprise de transport innovente et determinée. Notre dossier d'appel d'offres
                      vise à démontrer notre engagement à devenir votre partenaire priviligié pour des solutions de transport
                      en semi-remorques fiables et adaptées.
                    </p>
                    <div className='row'>
                      <div className='col-xl-6 col-lg-12 col-md-6'>
                        <ul className='list-inner-wrap mb-mb-0 mb-3 mb-lg-3 mb-xl-0'>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='GAF'
                            />{" "}
                            Capacité de Chargement Optimale
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='GAF'
                            />
                            Service Fiable
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='GAF'
                            />
                            Service Client Personnalisé
                          </li>
                          <li>
                            <img
                              src='./assets/img/icon/check.png'
                              alt='GAF'
                            />
                            Formateurs Expérimentés
                          </li>
                        </ul>
                      </div>
                      <div className='col-xl-6 col-lg-12 col-md-6 align-self-center'>
                        <div className='thumb'>
                          <img src='./assets/img/about/gaf3.png' alt='GAF' />
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about area end */}
    </>
  );
};

export default AboutOne;
