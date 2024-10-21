import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import {Helmet} from "react-helmet";
const Breadcrumb = React.lazy(() => import("../components/Breadcrumb"));
const ContactInner = React.lazy(() => import("../components/ContactInner"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contactez-nous - Groupe GAF</title>
        <meta name="description" content="Contactez le Groupe GAF pour toute demande d'information sur nos services de transport et logistique. Nous sommes à votre écoute." />
      </Helmet>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          {/* Navbar One */}
          <NavbarOne />

          {/* Breadcrumb */}
          <Breadcrumb title={"CONTACT"} banner={'6.webp'}/>

          {/* Breadcrumb */}
          <ContactInner />

          {/* Footer Bottom One */}
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default Contact;
