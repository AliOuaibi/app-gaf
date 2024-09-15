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
            <h3>Nous attendons de vous</h3>
            <div className="underline"></div>
            <p>
              Nous recherchons des partenaires de transport qualifiés sur une base
              indépendante pour les domaines suivants :
            </p>
            <ul>
              <li><strong>Transports – enlèvement et livraison</strong> sur la base de zones complètes ou de plusieurs
                tournées
              </li>
              <li><strong>Enveloppe</strong> (dans les sites DHL et auprès de certains gros clients)</li>
              <li><strong>Navette longue distance</strong> dit Linehaul</li>
              <li><strong>Dépôt en mode Opérateur Agréé</strong> (exploitation autonome d’un site)</li>
              <li><strong>Transport à vélo</strong></li>
            </ul>
          </div>

          <div className="column right-column">
            <h3>Vous pouvez attendre de nous</h3>
            <div className="underline"></div>
            <p>
              Avec GAF, vous avez à vos côtés le leader mondial du commerce international
              express. Cela signifie pour vous :
            </p>
            <ul>
              <li><strong>Rémunération</strong> en adéquation avec les conditions du marché (indice carburant)</li>
              <li><strong>Paiement ponctuel</strong> (via un système de facturation certifié)</li>
              <li><strong>Subvention</strong> pour frais de publicité</li>
              <li><strong>Un cadre</strong> clairement défini</li>
              <li><strong>De nombreux avantages</strong> grâce aux conditions d’achat de GROUP A FRET</li>
            </ul>
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
