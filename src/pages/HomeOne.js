import React, {Fragment, Suspense, useEffect} from "react";
import {Helmet} from "react-helmet";
import {useCookies} from "react-cookie";
import Preloader from "../elements/Preloader";
import NavbarOne from "../components/NavbarOne";
import BannerOne from "../components/BannerOne";
import {imgPartner} from "../data/img/imgPartner";
import {CommercialBrochureButton} from "../components/CommercialBrochureButton";
import CookieConsent from "../elements/CookieConsent";

const SectionAbout = React.lazy(() => import( "../components/SectionAbout"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const EcoOne = React.lazy(() => import("../components/EcoOne"));
const EcoBanner = React.lazy(() => import("../components/EcoBanner"));
const ServiceOne = React.lazy(() => import("../components/ServiceOne"));
const SolutionOne = React.lazy(() => import("../components/SolutionOne"));

const HomeOne = () => {
  const [cookies] = useCookies(['userConsent']);

  useEffect(() => {
    // Charger Google Analytics seulement si l'utilisateur a accepté les cookies
    if (cookies.userConsent === 'accepted') {
      window.dataLayer = window.dataLayer || [];

      function gtag() {
        window.dataLayer.push(arguments);
      }

      gtag('js', new Date());
      gtag('config', 'G-F75BQRMDKC');
    }
  }, [cookies]);

  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://www.groupegaf.fr/"/>

        <title>Groupe GAF - Transport et Logistique</title>
        <meta name="description"
              content="Découvrez le Groupe GAF, votre partenaire de confiance dans le transport et la logistique. Rejoignez-nous en tant que chauffeur ou sous-traitant et profitez d'opportunités uniques."/>
        <meta name="keywords"
              content="Groupe GAF, transport, logistique, devenir chauffeur, sous-traitant, solutions de transport, emploi chauffeur, transport routier"/>
        <meta name="robots" content="index, follow"/>

        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "inLanguage": "fr",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Quels services propose le Groupe GAF ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le Groupe GAF offre des solutions de transport et de logistique adaptées aux besoins des entreprises et des particuliers."
                }
              },
              {
                "@type": "Question",
                "name": "Pourquoi choisir le Groupe GAF pour vos besoins en transport ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Avec une expertise reconnue dans le domaine du transport et de la logistique, le Groupe GAF garantit un service fiable, rapide et personnalisé pour chaque client."
                }
              },
              {
                "@type": "Question",
                "name": "Comment rejoindre le Groupe GAF en tant que chauffeur ou sous-traitant ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pour rejoindre le Groupe GAF, consultez nos offres sur la page Devenir Chauffeur ou Devenir Sous-traitant. Remplissez le formulaire en ligne ou contactez notre équipe pour plus d'informations."
                }
              },
              {
                "@type": "Question",
                "name": "Le Groupe GAF propose-t-il des formations pour chauffeurs ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, le Groupe GAF propose des formations professionnelles pour chauffeurs, avec un accent sur la conduite sécurisée et les bonnes pratiques logistiques."
                }
              },
              {
                "@type": "Question",
                "name": "Comment contacter le Groupe GAF ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Vous pouvez nous contacter via notre page Contact sur le site web ou par téléphone pour toute demande ou question."
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
          <BannerOne/>

          <CookieConsent/>

          <AboutOne/>
          <SectionAbout/>
          <CommercialBrochureButton/>
          <ServiceOne/>
          <CounterOne/>
          <SolutionOne/>
          <EcoOne/>
          <EcoBanner/>
          <PartnerOne imgPartner={imgPartner} text/>
          <FooterBottomOne/>
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOne;
