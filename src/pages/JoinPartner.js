import React, { Fragment, Suspense } from "react";
import Preloader from "../elements/Preloader";
import TransportPartner from "../components/JoinPartner/TransportPartner";
import TransportSection from "../components/JoinPartner/TransportSection";
import FormJoinPartner from "../components/JoinPartner/FormJoinPartner";
import Breadcrumb from "../components/Breadcrumb";
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));

const JoinPartner = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader />}>
          <NavbarOne />
          <Breadcrumb title={"DEVENIR PARTENAIRE DE TRANSPORT"} banner={"5.png"}/>
          <TransportPartner />
          <TransportSection />
          <FormJoinPartner />
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default JoinPartner;
