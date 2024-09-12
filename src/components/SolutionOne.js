import React from "react";
import "./SolutionOne.css"

const SolutionOne = () => {
  return (
    <>
      <div className="features-container">
        <div className="feature-item">
          <img src="assets/img/solution/flotte.png" alt="Flotte compétitive"/>
          <h3>FLOTTE COMPÉTITIVE</h3>
          <p>RÉCENTE & DIVERSIFIÉE</p>
        </div>

        <div className="feature-item">
          <img src="assets/img/solution/atelier.png" alt="Atelier intégré"/>
          <h3>ATELIER INTÉGRÉ</h3>
          <p>RAPIDITÉ D'INTERVENTION</p>
        </div>

        <div className="feature-item">
          <img src="assets/img/solution/eco.png" alt="Éco-responsable"/>
          <h3>ÉCO-RESPONSABLE</h3>
          <p>RÉDUCTION DE CO²</p>
        </div>

        <div className="feature-item">
          <img src="assets/img/solution/temps.png" alt="Temps réel"/>
          <h3>TEMPS RÉEL</h3>
          <p>SUIVI DE LA FLOTTE</p>
        </div>

        <div className="feature-item">
          <img src="assets/img/solution/service.png" alt="Service sur-mesure"/>
          <h3>SERVICE SUR-MESURE</h3>
          <p>ADAPTÉ AU TRANSPORT</p>
        </div>

        <div className="feature-item">
          <img src="assets/img/solution/equipe-1.png" alt="Équipe disponible"/>
          <h3>ÉQUIPE DISPONIBLE</h3>
          <p>24H/24 & 7J/7</p>
        </div>
      </div>
    </>
  );
};

export default SolutionOne;
