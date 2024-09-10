import React from "react";

const BannerOne = () => {
  return (
    <div style={{position: 'relative', height: '100vh', overflow: 'hidden'}}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
        }}
      >
        <source src="https://transporteur.dhl.fr/wp-content/uploads/2022/07/AdobeStock_255726727.mp4"
                type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#161922',
          opacity: 0.8,
        }}
      ></div>

      {/* Contenu de la bannière */}
      <div style={{position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: '40vh'}}>
        <p
          style={{
            fontSize: '34px',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            color: '#fff'
          }}
        >
          DEVENIR PARTENAIRE DE TRANSPORT
        </p>
        <h1
          style={{
            fontSize: '58px',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            color: '#fff'
          }}
        >
          GRANDIR ENSEMBLE
        </h1>
      </div>
    </div>
  )
};

export default BannerOne;
