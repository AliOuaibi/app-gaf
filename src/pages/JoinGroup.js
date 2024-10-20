import React, {Fragment, Suspense} from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import JoinGroupContent from "../components/JoinGroup/JoinGroupContent";
import {Helmet} from "react-helmet";

const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));

const JoinGroup = () => {
  return (
    <>
      <Helmet>
        <title>Rejoindre le Groupe GAF - Opportunités de carrière</title>
        <meta name="description" content="Rejoignez le Groupe GAF, un leader dans le transport et la logistique. Découvrez nos offres d'emploi et devenez membre de notre équipe." />
      </Helmet>
      <Fragment>
        <Suspense fallback={<Preloader/>}>
          <NavbarOne/>
          <Breadcrumb title={"REJOINDRE LE GROUPE"} banner={"banniere-join-group.png"}/>
          <JoinGroupContent />
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default JoinGroup;
