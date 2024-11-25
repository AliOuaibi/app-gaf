import React, {Fragment, Suspense} from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import JoinGroupContent from "../components/JoinGroup/JoinGroupContent";
import {Helmet} from "react-helmet";

const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));

const JoinGroup = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.groupegaf.fr/devenir-chauffeur"/>

        <title>Rejoindre le Groupe GAF - Opportunités de carrière</title>
        <meta name="description"
              content="Rejoignez le Groupe GAF, un leader dans le transport et la logistique. Découvrez nos offres d'emploi et devenez membre de notre équipe."/>
        <meta name="keywords"
              content="Groupe GAF, devenir chauffeur, emploi chauffeur, transport, logistique, opportunités chauffeur"/>
        <meta name="robots" content="index, follow"/>

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Comment rejoindre le Groupe GAF en tant que chauffeur ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pour rejoindre le Groupe GAF, postulez directement sur notre site via la page Devenir Chauffeur ou contactez notre équipe via le formulaire de contact."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Quels sont les avantages de travailler chez Groupe GAF ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "En travaillant chez Groupe GAF, vous bénéficierez de contrats compétitifs, d'opportunités de carrière, et de l'appui d'une entreprise leader dans le transport et la logistique."
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
          <Breadcrumb title={"REJOINDRE LE GROUPE"} banner={"banniere-join-group.webp"}/>
          <JoinGroupContent/>
          <FooterBottomOne/>
        </Suspense>
      </Fragment>
    </>
  );
};

export default JoinGroup;
