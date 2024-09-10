import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceOneAll = () => {
  return (
    <>
      {/* service area start */}
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>NOS FORMATIONS</h4>
                <h2 className='title'>VOS FORMATIONS DÉDIÉES AUX MÉTIERS DU TRANSPORTS</h2>
                <p>
                  Formez vous au métiers du transport avec un accompagnement de A à Z avec des professionnelles,
                  à travers des stages et des sessions de formation qualifiantes
                  La plupart de nos offres sont éligibles au Compte Personnel de Formation (CPF).
                  Pour les personnes inscrites au pôle emploi, différentes aides existent afin de financer votre formation.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/1.png' alt='GAF' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-1.png'
                      alt='GAF'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>SEA TRANSPORTATION</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/2.png' alt='GAF' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-2.png'
                      alt='GAF'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>AIR TRANSPORTATION</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/3.png' alt='GAF' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-3.png'
                      alt='GAF'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>WAREHOUSING</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/4.png' alt='GAF' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-4.png'
                      alt='GAF'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>ROAD TRANSPORTATION</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/5.png' alt='GAF' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-5.png'
                      alt='GAF'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>TRAIN TRANSPORTATION</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='single-service-wrap'>
                <div className='thumb'>
                  <img src='assets/img/service/6.png' alt='GAF' />
                  <div className='icon'>
                    <img
                      src='assets/img/service/service-icon-6.png'
                      alt='GAF'
                    />
                  </div>
                </div>
                <div className='details'>
                  <h5>LAND TRANSPORTATION</h5>
                  <p>
                    Intrinsicly exploit e-business imperative with emerging
                    human capital.
                  </p>
                  <div className='btn-wrap'>
                    <Link className='read-more-text' to='/service-details'>
                      READ MORE{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
                  </div>
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

export default ServiceOneAll;
