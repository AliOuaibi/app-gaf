import React from "react";
import "./TransportPartner.css";

const TransportPartner = () => {
  return (
    <section className="transport-partner">
      <div className="container">
        <h2 className="title">DEVENEZ PARTENAIRE DE TRANSPORT</h2>
        <p className="subtitle">
          ET SOYEZ AUX CÔTÉS DU LEADER MONDIAL DU TRANSPORT EXPRESS
          INTERNATIONAL DANS PLUS DE 220 PAYS ET TERRITOIRES
        </p>
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
            En tant que prestataire de services d'excellence du GROUPE A FRET,
            la qualité et la satisfaction absolue de nos clients
            sont notre priorité.
          </p>
          <p>
            En France, nous exploitons un vaste réseau logistique et veillons à
            ce que les envois express de nos clients atteignent leur destination
            à temps et en toute sécurité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransportPartner;
