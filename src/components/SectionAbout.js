import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import './SectionAbout.css';

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Délai de 0.3 seconde entre chaque enfant (carte)
    },
  },
  hidden: {
    opacity: 0,
  },
};

const cardVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8, // Chaque carte prend 0.8 seconde pour apparaître
    },
  },
  hidden: {
    opacity: 0,
    y: 50, // Les cartes commencent légèrement en bas
  },
};

const SectionAbout = () => {
  const sectionRef = useRef(null);  // Référence pour la section entière
  const [inView, setInView] = useState(false);  // Suivi de la visibilité de la section

  useEffect(() => {
    const currentSectionRef = sectionRef.current;  // Capture la référence actuelle

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);  // Déclenche l'animation lorsqu'on fait défiler jusqu'à la section
          }
        });
      },
      {
        threshold: 0.1, // L'animation démarre lorsque 10% de la section est visible
      }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    // Nettoyage : Unobserve lorsque le composant est démonté
    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  return (
    <motion.div
      className='custom-cards-container'
      ref={sectionRef}  // Référence pour l'observateur
      variants={containerVariants}  // Variants pour l'animation séquencée du container
      initial="hidden"  // L'état initial est caché
      animate={inView ? "visible" : "hidden"}  // Animer lorsque la section est dans la vue
    >
      <div className='container-title-container'>
        <h5 className="title-custom-card">NOUS PROPOSONS LES SERVICES SUIVANTS</h5>
      </div>
      <div className='custom-cards-wrapper'>
        {/* Card 1 */}
        <motion.div
          className='custom-card-container'
          variants={cardVariants}  // Variants pour chaque carte
        >
          <div className='custom-card'>
            <img
              src='assets/img/about/80.png'
              alt='Transport porte-caisse mobile'
              className='custom-responsive-image'
            />
            <div className="about-custom-card">
              <h3 className="title-about-card">Transport <br />porte-caisse mobile</h3>
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
          variants={cardVariants}  // Variants pour chaque carte
        >
          <div className='custom-card'>
            <img
              src='assets/img/formation/7.png'
              alt='Transport tracteur semi-remorque'
              className='custom-responsive-image'
            />
            <div className="about-custom-card">
              <h3 className="title-about-card">Transport <br />tracteur semi-remorque</h3>
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
          variants={cardVariants}  // Variants pour chaque carte
        >
          <div className='custom-card'>
            <img
              src='assets/img/about/3.png'
              alt='Location de véhicule avec conducteur'
              className='custom-responsive-image'
            />
            <div className="about-custom-card">
              <h3 className="title-about-card">Location de véhicule <br />avec conducteur</h3>
              <p className="paragraphe-about-card">
                GAF est capable de répondre à tous vos besoins de mise à disposition de véhicules avec OU SANS
                conducteurs.Ce service vous permet de bénéficier de tous les atouts de l’entreprise ou de vos
                besoins de camion haut de gamme supplémentaire.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SectionAbout;
