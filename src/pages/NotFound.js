import React, {Fragment, Suspense} from "react";
import {Link} from "react-router-dom";
import Preloader from "../elements/Preloader";
const NavbarOne = React.lazy(() => import("../components/NavbarOne"));
const FooterBottomOne = React.lazy(() =>
  import("../components/FooterBottomOne")
);
function NotFound() {
  return (
    <Fragment>
      <Suspense fallback={<Preloader/>}>
        {/* Navbar One */}
        <NavbarOne/>
        <div style={{textAlign: "center", padding: "320px"}}>
          <h1>404 - Page Non Trouvée</h1>
          <p>La page que vous recherchez n'existe pas.</p>
          <Link to="/" style={{textDecoration: "none", color: "#243040"}}>
            Retour à l'accueil
          </Link>
        </div>
        <FooterBottomOne />
      </Suspense>
    </Fragment>
  );
}

export default NotFound;
