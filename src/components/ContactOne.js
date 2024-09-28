import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactOne = () => {
  return (
    <>
      <div>
        <div className='container mb-120'>
          <div className='row justify-content-center'>
            <div className='col-xl-6 col-lg-7'>
              <div className='cta-inner-wrap'>
                <div className='section-title style-white mb-0'>
                  <h4 className='subtitle style-2'>ON VOUS ÉCOUTE</h4>
                  <h2 className='title'>
                    Vous avez besoin d'aide ? Obtenez une consultation gratuite !
                  </h2>
                </div>
                <div className='single-cta-wrap'>
                  <div className='icon'>
                    <FaPhoneAlt />
                  </div>
                  <div className='details'>
                    <h6>Vous avez des questions ?</h6>
                    <h3>+33 6 17 68 35 48</h3>
                  </div>
                </div>
                <Link className='btn btn-base' to='/contact'>
                  CONTACTEZ-NOUS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactOne;
