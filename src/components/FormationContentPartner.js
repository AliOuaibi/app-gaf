import React from "react";
import "./FormationContentPartner.scss"

export const FormationContentPartner = () => {
  return (
    <div className="container-formation-partner">
      <h2>POUR LES ENTREPRISES</h2>

      <div className="section-formation-partner">
        <div className="block-formation-partner" style={{backgroundImage: "url('/assets/img/formation/e1.webp')"}}>
          <div className="section-title-formation-partner">
            <h3>Formation Intra-Entreprise</h3>
            <p>
              Formations sur mesure, sur site aussi bien sur la réglementation que sur les
              bonnes pratiques de l’entreprise et procédures interne de l’entreprise.
              GAF effectue aussi des procédures d’audit et d’immersion afin de proposer un programme sur-mesure
            </p>
          </div>
        </div>
        <div className="block-formation-partner" style={{backgroundImage: "url('/assets/img/formation/e2.webp')"}}>
          <div className="section-title-formation-partner">
            <h3>Formateur à disposition</h3>
            <p>
              GAF, de par la qualité de ces interventions, peut intervenir sur des
              programmes existants au sein d'autres centres de formations.
            </p>
          </div>
        </div>
        <div className="block-formation-partner" style={{backgroundImage: "url('/assets/img/formation/e3.webp')"}}>
          <div className="section-title-formation-partner">
            <h3>Intervention<br/> en école</h3>
            <p>
              Technique pédagogique et veille réglementaire nous permettent de fournir un professionnalisme
              aux écoles ayant des cours de transport logistiques et de plus en plus d’école font
              confiance à nos intervenants et à la qualité de leurs prestations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}