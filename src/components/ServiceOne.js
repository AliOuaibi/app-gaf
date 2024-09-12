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
            <div className='mx-auto'>
              <p style={{fontWeight: "500", fontSize: "45px"}}>UNE FLOTTE</p>
              <h2 className='title' style={{fontWeight: "900", lineHeight: "64px", marginTop: "-20px"}}>
                HAUT DE GAMME ET
                RECENTE.
              </h2>
              <div style={{borderBottom: "10px solid #243040", margin: "20px 0", width: "50%"}}></div>
              <p>
                Découvrez notre expertise à travers des services de transport poids lourd,
                location flexible de véhicules, formation spécialisée,
                et une assistance personnalisée.
                Nous sommes dédiés à répondre à vos besoins avec professionnalisme et efficacité.
              </p>
            </div>
          </div>

        <div className='service-block-2'>
          <img src="assets/img/service/camion.png" alt="gaf-truck" style={{display: 'block', marginLeft: 'auto', width: '100%'}}/>
          </div>
        </div>

      {/* service area end */}
    </>
  );
};

export default ServiceOne;
