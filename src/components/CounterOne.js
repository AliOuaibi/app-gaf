import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const CounterOne = () => {
  return (
    <>
      {/*fact-area start*/}
      <div className='container mg-top-160' style={{marginBottom: "100px"}}>
        <div
          className='fact-counter-area'
          style={{ background: "url(assets/img/fact/bg.png)" }}
        >
          <div className='row justify-content-center'>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter' style={{color: "#fff"}}>
                          <CountUp delay={0} start={0} end={25} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>CONDUCTEURS</h5>
                <p>Nous sommes une équipe dynamique et créative, composée d'une vingtaine de collaborateurs.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter' style={{color: "#fff"}}>
                          <CountUp delay={0} start={0} end={50} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>CARTES GRISES</h5>
                <p>Plus de 50 cartes de grise émises pour des poids lourds, attestant de notre expertise et
                  de notre confiance dans le secteur du transport.</p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter' style={{color: "#fff"}}>
                          <CountUp delay={0} start={0} end={100} />%
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>ÉCO RESPONSABLE</h5>
                <p>
                  Nous offrons des poids lourds éco-responsables, incluant des véhicules fonctionnant à
                  l'oléopneumatique, pour une solution de transport durable et innovante.
                </p>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap after-none'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter' style={{color: "#fff"}}>
                          <CountUp delay={0} start={0} end={100} />%
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>MADE IN FRANCE</h5>
                <p>
                  Engagés pour l'excellence à la française,
                  nous vous offrons des services de transport de poids lourds fiables et innovants,
                  tout en valorisant le savoir-faire et les normes de qualité de notre pays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*fact-area end*/}
    </>
  );
};

export default CounterOne;
