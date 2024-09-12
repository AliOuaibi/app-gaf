import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
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

          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <Breadcrumb title={"FORMATION"} banner={"formation-bg.png"} video/>

          {/* Formation One All */}
          <FormationContent />

          {/* Contact One */}
          <div className='call-to-contact-area pd-top-140  mt-0'>
            <ContactOne />
          </div>

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>{" "}
      </Fragment>
    </>
  );
};

export default Formation;
