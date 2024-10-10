import React from "react";
import './SectionAbout.css';

const SectionAbout = () => {
  return (
    <>
      <div className='custom-cards-container'>
        <div className='container-title-container'>
          <h5 className="title-custom-card">NOUS PROPOSONS LES SERVICES SUIVANTS</h5>
        </div>
        <div className='custom-cards-wrapper'>
          {/* Card 1 */}
          <div className='custom-card-container'>
            <div className='custom-card'>
              <img
                src='assets/img/about/80.png'
                alt='Transport porte-caisse mobile'
                className='custom-responsive-image'
              />
              <div className="about-custom-card">
                <h3 className="title-about-card">Transport <br/>porte-caisse mobile</h3>
                <p className="paragraphe-about-card">
                  Les prestations de GAF s’adressent à toute entreprise utilisant la caisse mobile :
                  entreprises de messagerie, de mono colis, les réseaux de distribution non publics…
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='custom-card-container'>
            <div className='custom-card'>
              <img
                src='assets/img/formation/7.png'
                alt='Transport tracteur semi-remorque'
                className='custom-responsive-image'
              />
              <div className="about-custom-card">
                <h3 className="title-about-card">Transport <br/>tracteur semi-remorque</h3>
                <p className="paragraphe-about-card">
                  En fonction des besoins, des contraintes d’infrastructures ou de quais de chargement par exemple,
                  le transport en semi-remorque peut être plus adapté. Les équipes de GAF exploitent des lignes
                  régulières dans les régions où l’entreprise est implantée.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='custom-card-container'>
            <div className='custom-card'>
              <img
                src='assets/img/about/3.png'
                alt='Location de véhicule avec conducteur'
                className='custom-responsive-image'
              />
              <div className="about-custom-card">
                <h3 className="title-about-card">Location de véhicule <br/>avec conducteur</h3>
                <p className="paragraphe-about-card">
                  GAF est capable de répondre à tous vos besoins de mise à disposition de véhicules avec OU SANS
                  conducteurs.Ce service vous permet de bénéficier de tous les atouts de l’entreprise ou de vos
                  besoins de camion haut de gamme supplémentaire.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionAbout;
