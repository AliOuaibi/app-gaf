import React from "react";
import "./TransportSection.css";
import {
  FaAward,
  FaBalanceScale,
  FaBuilding,
  FaCertificate,
  FaFlask,
  FaPeopleArrows,
  FaTruckLoading
} from "react-icons/fa";

const TransportSection = () => {
  return (
    <section className="transport-section">
      <div className="container-section">
        <div className="content-transport-section">
          <div className="column left-column">
            <h3>GARANTIE DE PAIEMENT</h3>
            <div className="underline"></div>
            <p>
              Nous nous engageons à vous payer par virement dans le respect de la réglementation de 30 jours.
            </p>
          </div>

          <div className="column right-column">
            <h3>FORMATION</h3>
            <div className="underline"></div>
            <p>
              Profitez des infrastructures et de notre personnel qualifié pour
              la formation de vos conducteurs et de vos exploitants.
            </p>
          </div>
        </div>
      </div>

      <div className="blue-section">
        <h3>Conditions préalables</h3>
        <div className="underline"></div>
        <p>
          Nous attendons de nos partenaires de transport les conditions suivantes :
        </p>
        <ul className="conditions-list">
          <li>
            <span className="icon"><FaBuilding /></span>
            Entreprise financièrement stable et indépendante
          </li>
          <li>
            <span className="icon"><FaTruckLoading /></span>
            Connaissance du marché / expérience professionnelle dans le domaine de la logistique
          </li>
          <li>
            <span className="icon"><FaAward /></span>
            Formation continue régulière de ses propres collaborateurs
          </li>
          <li>
            <span className="icon"><FaCertificate /></span>
            Certificats de conduite irréprochables
          </li>
          <li>
            <span className="icon"><FaBalanceScale /></span>
            Respect de toutes les dispositions légales, en particulier le salaire minimum
          </li>
          <li>
            <span className="icon"><FaFlask /></span>
            Agent des marchandises dangereuses
          </li>
          <li>
            <span className="icon"><FaPeopleArrows /></span>
            Flexibilité de la flotte et du personnel
          </li>
        </ul>
      </div>
</section>
)
  ;
};

export default TransportSection;
