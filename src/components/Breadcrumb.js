import React from "react";
import {Link} from "react-router-dom";
import LazyLoad from "react-lazyload";

const Breadcrumb = ({title, banner}) => {
  return (
    <>
      <LazyLoad>
        <div
          className='breadcrumb-area bg-overlay-2'
          style={{backgroundImage: `url('assets/img/banner/${banner}')`}}
        >
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='breadcrumb-inner'>
                  <div className='section-title mb-0'>
                    <h2 className='page-title'>{title}</h2>
                    <ul className='page-list'>
                      <li>
                        <Link to='/' style={{color: "blue"}}>ACCEUIL</Link>
                      </li>
                      {" "}
                      /
                      <li className='ps-0'>{title}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>
    </>
  );
};

export default Breadcrumb;
