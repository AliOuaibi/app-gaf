import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
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

          {/* Feature One */}
          {/*<FeatureOne />*/}


          {/* Service One */}
          <ServiceOne />

          {/* Why Choose Us One */}
          {/*<WhyChooseUsOne />*/}

          {/* Counter One */}

          <CounterOne />

          {/* Contact One */}
          {/*<div*/}
          {/*  className='call-to-contact-area pd-top-240'*/}
          {/*  style={{ background: "#F9F9F9" }}*/}
          {/*>*/}
          {/*  <ContactOne />*/}
          {/*</div>*/}

          {/* Portfolio One */}
          <PortfolioOne />

          {/* Partner One */}
          <PartnerOne />

          {/* Footer One */}
          <FooterOne />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default HomeOne;
