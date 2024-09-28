import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import {imgPartner} from "../data/img/imgPartner";
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
const SolutionOne = React.lazy(() => import("../components/SolutionOne"));

const HomeOne = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <NavbarOne />

          <BannerOne />

          <AboutOne />

          <SectionAbout />

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
