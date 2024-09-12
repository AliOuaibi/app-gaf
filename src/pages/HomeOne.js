import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const SectionAbout = React.lazy(() => import( "../components/SectionAbout"));
const BannerOne = React.lazy(() => import("../components/BannerOne"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const EcoOne = React.lazy(() => import("../components/EcoOne"));
const EcoBanner = React.lazy(() => import("../components/EcoBanner"));
const ServiceOne = React.lazy(() => import("../components/ServiceOne"));

const HomeOne = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>

          {/* Navbar One */}
          <NavbarOne />

          {/* Banner One */}
          <BannerOne />

          {/* About One */}
          <AboutOne />

          <SectionAbout />


          {/* Formation One */}
          <ServiceOne />

          <CounterOne />

          {/* Eco One */}
          <EcoOne />
          <EcoBanner />

          {/* Partner One */}
          <PartnerOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOne;
