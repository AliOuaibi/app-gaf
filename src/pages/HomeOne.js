import React, {Fragment, Suspense, useEffect} from "react";
import { useCookies } from "react-cookie";
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
  const [cookies] = useCookies(['userConsent']); // Lire le consentement des cookies

  useEffect(() => {
    // Charger Google Analytics seulement si l'utilisateur a accepté les cookies
    if (cookies.userConsent === 'accepted') {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'G-F75BQRMDKC');  // Remplace par ton ID Google Analytics
    }
  }, [cookies]);

  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <NavbarOne />
          <BannerOne />

          <CookieConsent />

          <AboutOne />
          <SectionAbout />
          <CommercialBrochureButton />
          <ServiceOne />
          <CounterOne />
          <SolutionOne />
          <EcoOne />
          <EcoBanner />
          <PartnerOne imgPartner={imgPartner} text/>
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOne;
