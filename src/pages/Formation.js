import React, { Fragment, Suspense } from "react";
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
        <title>Formation - Groupe GAF</title>
        <meta name="description" content="Découvrez nos formations spécialisées en transport et logistique avec le Groupe GAF. Partenariats et expertise à votre disposition." />
      </Helmet>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <NavbarOne />
          <Breadcrumb title={"FORMATION"} banner={"salle-de-formation.png"} video/>
          <PartnerOne imgPartner={imgPartnerFormation}/>
          <FormationContent />
          <FormationContentPartner/>
          <div className='call-to-contact-area pd-top-140  mt-0'>
            <ContactOne />
          </div>
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default Formation;
