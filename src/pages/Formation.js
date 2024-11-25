import React, {Fragment, Suspense} from "react";
import Preloader from "../elements/Preloader";
import {FormationContentPartner} from "../components/FormationContentPartner";
import {imgPartnerFormation} from "../data/img/imgPartner";
import PartnerOne from "../components/PartnerOne";
import {Helmet} from "react-helmet";

const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ContactOne = React.lazy(() => import("../components/ContactOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const FormationContent = React.lazy(() => import("../components/FormationContent"));

const Formation = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.groupegaf.fr/formation"/>

        <title>Formation - Groupe GAF</title>
        <meta name="description"
              content="Découvrez nos formations spécialisées en transport et logistique avec le Groupe GAF. Partenariats et expertise à votre disposition."/>
        <meta name="keywords" content="formation chauffeur, Groupe GAF, transport, logistique, formation professionnelle" />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Quelles formations propose le Groupe GAF ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Le Groupe GAF propose des formations professionnelles pour devenir chauffeur, incluant la conduite sécurisée et les bonnes pratiques dans le domaine du transport et de la logistique."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Comment s'inscrire à une formation avec le Groupe GAF ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pour vous inscrire, visitez notre site et complétez le formulaire d'inscription sur la page Formation ou contactez notre équipe pour obtenir des informations supplémentaires."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <Fragment>
        <Suspense fallback={<Preloader/>}>
          <NavbarOne/>
          <Breadcrumb title={"FORMATION"} banner={"salle-de-formation.png"} video/>
          <PartnerOne imgPartner={imgPartnerFormation}/>
          <FormationContent/>
          <FormationContentPartner/>
          <div className='call-to-contact-area pd-top-140  mt-0'>
            <ContactOne/>
          </div>
          <FooterBottomOne/>
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default Formation;
