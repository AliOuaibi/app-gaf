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
                src='assets/img/about/porte-caisse.png'
                alt='Transport porte-caisse mobile'
                className='custom-responsive-image'
              />
              <div className="about-custom-card">
                <p className="paragraphe-about-card">Transport <br/>porte-caisse mobile</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='custom-card-container'>
            <div className='custom-card'>
              <img
                src='assets/img/about/semi-remorque.png'
                alt='Transport tracteur semi-remorque'
                className='custom-responsive-image'
              />
              <div className="about-custom-card">
                <p className="paragraphe-about-card">Transport <br/>tracteur semi-remorque</p>
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
                <p className="paragraphe-about-card">Location de véhicule <br/>avec conducteur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionAbout;
