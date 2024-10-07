import React from "react";
import "./TransportPartner.css";

const TransportPartner = () => {
  return (
    <section className="transport-partner">
      <div className="container">
        <h2 className="title">
          Devenez partenaire de GAF et bénéficiez de notre réseau de clients,
          pour une opportunités de ligne régulière !
        </h2>
        <div className="image-container">
          <img
            src="/assets/img/img-truck.png"
            alt="Véhicules de transport"
            className="vehicles-image"
          />
        </div>
      </div>
      <div className="text-content-wrapper">
        <div className="text-content">
          <p>
            Notre promesse : optimiser vos trajets avec les chargements de nos clients,
            sur des lignes régulières et adaptées à vos moyens.
          </p>
          <p>
            Si vous souhaitez proposer les services de votre société,
            il vous faut dans un premier temps vous inscrire
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransportPartner;
