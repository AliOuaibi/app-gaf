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
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter' style={{color: "#fff"}}>
                          <CountUp delay={0} start={0} end={1000000} />
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>D'EUROS DE CA</h5>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='single-fact-wrap after-none'>
                <h2>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter' style={{color: "#fff"}}>
                          <CountUp delay={0} start={0} end={10} />+
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <h5>CLIENTS LIVRES PAR JOURS</h5>
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
