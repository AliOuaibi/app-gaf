import React from "react";

const BannerOne = () => {
  return (
    <>
      {/* banner start */}
      <div className='banner-area banner-area-1'>
        <div className='banner-slider owl-carousel'>
            <div>
              <div
                className='item'
                style={{ backgroundImage: 'url("./assets/img/banner/poids-lourd-banner-1.png")' }}
              >
                <div className='container'>
                  <div className='row'>
                    <div className='mx-auto'>
                      <div className='banner-inner style-white'>
                        <h1 className='b-animate-2 title text-center'>
                          VOTRE PARTENAIRE DE TRANSPORT
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};

export default BannerOne;
