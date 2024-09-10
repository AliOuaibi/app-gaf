import React from "react";
const WhyChooseUsOne = () => {
  return (
    <>
      {/*wcu-area start*/}
      <div
        className='wcu-area bg-overlay'
      >
        <img className='img-1' src='assets/img/wcu/1.png' alt='GAF' />
        <img className='img-2' src='assets/img/wcu/tracte.png' alt='GAF' />
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-xl-7 col-lg-6 order-lg-2'>
              <div className='video-thumb-wrap'>
                <img src='assets/img/wcu/wcu.png' alt='GAF' />
              </div>
            </div>
            <div className='col-xl-5 col-lg-6 order-lg-1'>
              <div className='section-title style-white mb-0'>
                <h4 className='subtitle style-2'>POURQUOI NOUS</h4>
                <h2 className='title'>POURQUOI NOUS CHOISIR</h2>
                <p className='content'>
                  Dramatically enhance interactive metrics for reliable
                  services. Proactively unleash fully researched e-commerce.
                </p>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-1.png' alt='GAF' />
                </div>
                <div className='details'>
                  <h6>Poids Lourds Éco-Responsables</h6>
                  <p>
                    Accédez à une flotte de poids lourds écologiques, y compris des modèles fonctionnant à l'huile,
                    pour un transport plus durable et respectueux de l'environnement.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-2.png' alt='GAF' />
                </div>
                <div className='details'>
                  <h6>Service Client Dédié</h6>
                  <p>
                    Profitez d’un service client réactif et personnalisé, prêt à répondre à toutes
                    vos questions et à vous offrir le meilleur accompagnement possible.
                  </p>
                </div>
              </div>
              <div className='single-wcu-wrap'>
                <div className='icon'>
                  <img src='assets/img/wcu/icon-3.png' alt='GAF' />
                </div>
                <div className='details'>
                  <h6>Location Flexible de Véhicules</h6>
                  <p>
                    Louez des véhicules avec ou sans conducteur, adaptés à vos besoins spécifiques,
                    avec des options flexibles pour une gestion simplifiée de votre flotte.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUsOne;
