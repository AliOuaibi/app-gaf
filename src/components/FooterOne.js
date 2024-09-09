import React from "react";
import {
  FaArrowRight,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterOne = () => {
  return (
    <>
      {/* footer area start */}
      <footer className='footer-area'>
        <div
          className='footer-top'
          style={{ backgroundImage: 'url("./assets/img/footer/bg.png")' }}
        >
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/map-marker.png' alt='GAF' />
                  </div>
                  <div className='details'>
                    <h6>ADDRESS:</h6>
                    <p>3 Rue Jules Guesde, </p>
                    <p>91130 Ris-Orangis</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top'>
                  <div className='icon'>
                    <img src='assets/img/icon/phone.png' alt='GAF' />
                  </div>
                  <div className='details'>
                    <h6>CONTACT:</h6>
                    <p>contact@groupe-afret.fr</p>
                    <p>+33767665415</p>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6'>
                <div className='single-footer-top after-none'>
                  <div className='icon'>
                    <img src='assets/img/icon/clock.png' alt='GAF' />
                  </div>
                  <div className='details'>
                    <h6>OUVERT:</h6>
                    <p>Tous les jours 7j/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/gaf3.png' alt='GAF' />
                </div>
                <div className='details'>
                  <p>
                    Explorez nos ressources et découvrez tout ce que nous avons à offrir.
                    Restez connectés avec nous pour des services de qualité et des solutions sur mesure.
                  </p>
                  <ul className='social-media style-border'>
                    <li>
                      <a href='#'>
                        <FaFacebookF/>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram/>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaLinkedinIn/>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-xl-2 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>LIENS UTILES</h4>
                <ul>
                  <li>
                    <Link to='/'>
                      <FaArrowRight/> Acceuil
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <FaArrowRight/> Services
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <FaArrowRight/>
                      Formation
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <FaArrowRight/> Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col-xl-2 col-md-6'>
              <img src='assets/img/footer/gaf-footer.png' alt='GAF'/>
            </div>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterOne;
