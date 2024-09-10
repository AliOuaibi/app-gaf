import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
const SectionAbout = React.lazy(() => import( "../components/SectionAbout"));
const BannerOne = React.lazy(() => import("../components/BannerOne"));
const AboutOne = React.lazy(() => import("../components/AboutOne"));
const CounterOne = React.lazy(() => import("../components/CounterOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const FooterOne = React.lazy(() => import("../components/FooterOne"));
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const PartnerOne = React.lazy(() => import("../components/PartnerOne"));
const PortfolioOne = React.lazy(() => import("../components/PortfolioOne"));
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


          {/* Service One */}
          <ServiceOne />

          <CounterOne />

          {/* Portfolio One */}
          <PortfolioOne />

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
