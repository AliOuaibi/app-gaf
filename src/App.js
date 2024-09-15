import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import Formation from "./pages/Formation";
import Contact from "./pages/Contact";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import JoinPartner from "./pages/JoinPartner";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path='/' element={<HomeOne />} />
        <Route exact path='/formation' element={<Formation />} />
        <Route exact path='/devenir-sous-traitant' element={<JoinPartner />} />
        <Route exact path='/contact' element={<Contact />} />
      </Routes>
      <ScrollToTop smooth color='#243040' />
    </BrowserRouter>
  );
}

export default App;
