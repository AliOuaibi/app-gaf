import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import {FormationContentPartner} from "../components/FormationContentPartner";
import {imgPartnerFormation} from "../data/img/imgPartner";
import PartnerOne from "../components/PartnerOne";
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
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <NavbarOne />
          <Breadcrumb title={"FORMATION"} banner={"centre-formation.jpg"} video/>
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
