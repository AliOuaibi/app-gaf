import React from "react";
import './SectionAbout.css';

const SectionAbout = () => {
  return (
    <>
      <div className='custom-cards-container'>
        <div className='custom-cards-wrapper'>
          {/* Card 1 */}
          <div className='custom-card-container'>
            <div className='custom-card'>
              <img
                src='assets/img/about/chauffeur.png'
                alt='Transport porte-caisse mobile'
                className='custom-responsive-image'
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className='custom-card-container'>
            <div className='custom-card'>
              <img
                src='assets/img/service/service2.png'
                alt='Transport tracteur semi-remorque'
                className='custom-responsive-image'
              />
            </div>
          </div>

          {/* Card 3 */}
          <div className='custom-card-container'>
            <div className='custom-card'>
              <img
                src='assets/img/service/service1.png'
                alt='Location de véhicule avec conducteur'
                className='custom-responsive-image'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionAbout;
