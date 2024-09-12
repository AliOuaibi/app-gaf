import React from "react";
import { TbClockHour4 } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

import { formation } from "../data/formation/formation"

const FormationContent = () => {
  return (
    <>
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>NOS FORMATIONS</h4>
                <h2 className='title'>VOS FORMATIONS DÉDIÉES AUX MÉTIERS DU TRANSPORTS</h2>
                <p>
                  Formez vous au métiers du transport avec un accompagnement de A à Z avec des professionnelles,
                  à travers des stages et des sessions de formation qualifiantes
                  La plupart de nos offres sont éligibles au Compte Personnel de Formation (CPF).
                  Pour les personnes inscrites au pôle emploi, différentes aides existent afin de financer votre formation.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            {formation.map(({id, title, hour, startDate, price, bannerImage}) => (
                <div className='col-lg-4' key={`formation-card-${id}`}>
                  <div className='single-service-wrap'>
                    <div className='thumb'>
                      <img src={bannerImage} alt='GAF'/>
                      <div className='icon'>
                        <FaInfoCircle color="#fff" fontSize={35} />
                      </div>
                    </div>
                    <div className='details'>
                      <h5>{title}</h5>
                      <p><TbClockHour4 style={{fontSize: "30px", fontWeight: "bold"}}/> {hour}</p>
                      <p><FaCalendarAlt style={{fontSize: "30px", fontWeight: "bold"}}/> {startDate}</p>
                      <div className='btn-wrap'>
                        <h5>{price}</h5>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormationContent;
