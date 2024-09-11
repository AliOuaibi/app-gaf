import React from "react";
import {useWindowSize} from "../hook/use-window-size";
import "./EcoBanner.css"

const EcoBanner = () => {
  const { width } = useWindowSize();
  const isMobile = width <= 760;

  return (
    <div className="full-background-img-container">
      {isMobile ?
        <div className="block-eco-mobile">
          <div className="block-eco">
            <img src="assets/img/portfolio/picto-camion.svg" alt="picto-eco"/>
            <h1>RENOUVELLEMENT DU PARC</h1>
            <p>
              Pour garantir la mutation progressive de notre parc,
              nous le renouvelons régulièrement en intégrant exclusivement
              des véhicules roulant au gaz.
            </p>
          </div>

          <div style={{borderBottom: "5px solid #fff", margin: "20px auto"}}></div>

          <div className="block-eco">
            <img src="assets/img/portfolio/leaf.svg" alt="picto-eco"/>
            <h1>RENOUVELLEMENT DU PARC</h1>
            <p>
              Pour garantir la mutation progressive de notre parc,
              nous le renouvelons régulièrement en intégrant exclusivement
              des véhicules roulant au gaz.
            </p>
          </div>

          <div style={{borderBottom: "5px solid #fff", margin: "20px auto"}}></div>

          <div className="block-eco">
            <img src="assets/img/portfolio/c02.svg" alt="picto-eco"/>
            <h1>RENOUVELLEMENT DU PARC</h1>
            <p>
              Pour garantir la mutation progressive de notre parc,
              nous le renouvelons régulièrement en intégrant exclusivement
              des véhicules roulant au gaz.
            </p>
          </div>
          <div style={{borderBottom: "5px solid #fff", margin: "20px auto"}}></div>

        </div>
        :
        <img src="assets/img/portfolio/banner-eco.png" alt="eco banner" className="full-background-img"/>
      }

      <div className="mx-auto text-center" style={{display: "block"}}>
        <h1 style={{color: "#78B742", marginTop: "2%", fontSize: "140px"}}>100%</h1>
        <h4 style={{fontSize: '20px'}}>DE FLOTTE "VERTE" À L'HORIZON 2030</h4>
        <img src="assets/img/portfolio/camion-eco.png" alt="camion eco" />
        <p style={{width: "50%", margin: "30px auto"}}>
          La transition écologique est en marche ! Parce que nous devons avoir une longueur d’avance et
          par conscience environnementale, nous préférons anticiper les évolutions réglementaires à venir.
          Nous visons une flotte 100% verte dès 2030, composée de véhicules électriques, au gaz ou aux biocarburants.
        </p>
      </div>
    </div>
)
}

export default EcoBanner;