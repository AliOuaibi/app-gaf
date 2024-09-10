import React from "react";
import './ServiceOne.scss'

const ServiceOne = () => {
  return (
    <>
      {/* service area start */}
      <div
        className='pd-top-60 service-gaf'
        style={{backgroundImage: 'linear-gradient(to left, white, lightgray)',}}
      >
          <div className='service-block-1'>
            <div className='text-center'>
              <h2 className='title'>NOTRE SERVICE POUR VOUS</h2>
              <p>
                Découvrez notre expertise à travers des services de transport poids lourd,
                location flexible de véhicules, formation spécialisée,
                et une assistance personnalisée.
                Nous sommes dédiés à répondre à vos besoins avec professionnalisme et efficacité.
              </p>
            </div>
          </div>

          <div className='service-block-2'>
            <img src="assets/img/service/truck-left.png" alt="gaf-truck" style={{display: 'block', marginLeft: 'auto', width: '80%'}}/>
          </div>
        </div>

      {/* service area end */}
    </>
  );
};

export default ServiceOne;
