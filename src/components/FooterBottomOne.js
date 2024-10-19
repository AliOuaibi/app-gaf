import React from "react";

const FooterBottomOne = () => {
  return (
    <>
      {/* footer-bottom area start */}
      <div className='footer-bottom-area'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 text-lg-start text-center'>
              <div className='copyright-area'>
                <p>
                  © Copyright 2024 <b><a href='/'>GAF</a></b>, site propulsé par l'angence <b>PYWEB</b>.
                </p>
              </div>
            </div>
            <div className='col-lg-6 text-lg-end text-center'>
              <ul>
                <li>
                  <a href='/termes-et-conditions'>Termes et Conditions</a>
                </li>
                <li>
                  <a href='/politique-et-confidialite'>Politique et Confidentialité</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* footer-bottom area end */}
    </>
  );
};

export default FooterBottomOne;
