import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import './SectionAbout.css';

const SectionAbout = () => {
  const cardsRef = useRef([]);
  const [inView, setInView] = useState([false, false, false]);

  useEffect(() => {
    const currentCardsRef = cardsRef.current; // Capture la référence actuelle des cartes

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setInView((prev) => {
              const updatedInView = [...prev];
              updatedInView[index] = true;
              return updatedInView;
            });
          }
        });
      },
      {
        threshold: 0.1, // Déclenche lorsque 10% de la section est visible
      }
    );

    currentCardsRef.forEach((card) => {
      if (card) {
        observer.observe(card);
      }
    });

    // Cleanup function pour arrêter l'observation
    return () => {
      currentCardsRef.forEach((card) => {
        if (card) {
          observer.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div className='custom-cards-container'>
      <div className='container-title-container'>
        <h5 className="title-custom-card">NOUS PROPOSONS LES SERVICES SUIVANTS</h5>
      </div>
      <div className='custom-cards-wrapper'>
        {/* Card 1 */}
        <motion.div
          className='custom-card-container'
          ref={(el) => { cardsRef.current[0] = el; }}
          initial={{ opacity: 0, y: 20 }} // Départ
          animate={inView[0] ? { opacity: 1, y: 0 } : {}} // Animation déclenchée
          transition={{ duration: 2 }} // Durée de l'animation
        >
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
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className='custom-card-container'
          ref={(el) => { cardsRef.current[1] = el; }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView[1] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 2, delay: 0.2 }}
        >
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
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className='custom-card-container'
          ref={(el) => { cardsRef.current[2] = el; }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView[2] ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 3, delay: 0.4 }}
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default SectionAbout;
