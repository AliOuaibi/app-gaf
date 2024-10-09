import React, {Fragment, Suspense} from "react";
import Preloader from "../elements/Preloader";
import Breadcrumb from "../components/Breadcrumb";
import JoinGroupContent from "../components/JoinGroup/JoinGroupContent";

const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));

const JoinGroup = () => {
  return (
    <>
      <Fragment>
        <Suspense fallback={<Preloader/>}>
          <NavbarOne/>
          <Breadcrumb title={"REJOINDRE LE GROUPE"} banner={"banniere-join-group.png"} video/>
          <JoinGroupContent />
          <FooterBottomOne />
        </Suspense>
      </Fragment>
    </>
  );
};

export default JoinGroup;
