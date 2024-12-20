import React, {Fragment, Suspense} from "react";
import Preloader from "../elements/Preloader";
import TransportPartner from "../components/JoinPartner/TransportPartner";
import TransportSection from "../components/JoinPartner/TransportSection";
import FormJoinPartner from "../components/JoinPartner/FormJoinPartner";
import Breadcrumb from "../components/Breadcrumb";
import {Helmet} from "react-helmet";

const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));

const JoinPartner = () => {
  return (
    <>
      <Helmet>
        <title>Devenir Sous-traitant - Groupe GAF</title>
        <link rel="canonical" href="https://www.groupegaf.fr/devenir-sous-traitant" />
        <meta name="description"
              content="Rejoignez le Groupe GAF en tant que sous-traitant spécialisé en transport et logistique. Découvrez nos conditions de collaboration."/>
        <meta name="keywords"
              content="Groupe GAF, devenir partenaire, sous-traitant, transport, logistique, opportunités, collaboration"/>
        <meta name="robots" content="index, follow"/>
      </Helmet>
      <Fragment>
        <Suspense fallback={<Preloader/>}>
          <NavbarOne/>
          <Breadcrumb title={"DEVENIR PARTENAIRE DE TRANSPORT"} banner={"5.png"}/>
          <TransportPartner/>
          <TransportSection/>
          <FormJoinPartner/>
          <FooterBottomOne/>
        </Suspense>
      </Fragment>
    </>
  );
};

export default JoinPartner;
