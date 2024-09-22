import React, {useState} from "react";
import {TbClockHour4} from "react-icons/tb";
import {FaArrowRight, FaCalendarAlt} from "react-icons/fa";
import {FaInfoCircle} from "react-icons/fa";
import {formations} from "../data/formation/formation"
import FormationModal from "../elements/Modal/FormationModal";

const FormationContent = () => {
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = (formation) => {
    setSelectedFormation(formation);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedFormation(null);
  };

  return (
    <>
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>VOTRE SPÉCIALISTE DE LA FORMATION</h4>
                <h2 className='title'>VOS FORMATIONS DÉDIÉES AUX MÉTIERS DU TRANSPORTS</h2>
                <p>
                  Formez vous au métiers du transport avec un accompagnement de A à Z avec des professionnelles,
                  à travers des stages et des sessions de formation qualifiantes. <br/>
                  La plupart de nos offres sont éligibles au Compte Personnel de Formation (CPF).
                  Pour les personnes inscrites au pôle emploi, différentes aides existent afin de financer votre
                  formation.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            {formations.map((formation) => (
                <div className='col-lg-4' key={`formation-card-${formation.id}`}>
                  <div className='single-service-wrap'>
                    <div className='thumb'>
                      <img src={formation.bannerImage} alt='GAF'/>
                      <div className='icon'>
                        <FaInfoCircle color="#fff" fontSize={35}/>
                      </div>
                    </div>
                    <div className='details'>
                      <h5>{formation.title}</h5>
                      <p><TbClockHour4 style={{fontSize: "30px", fontWeight: "bold"}}/> {formation.hour}</p>
                      <p><FaCalendarAlt style={{fontSize: "30px", fontWeight: "bold"}}/> {formation.startDate}</p>
                      <div className='btn-wrap'>
                        <h5>{formation.price}</h5>
                        <div className='read-more-text' onClick={() => handleShow(formation)}>
                          VOIR PLUS{" "}
                          <span>
                            <FaArrowRight/>
                           </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {selectedFormation && (
        <FormationModal
          show={show}
          handleClose={handleClose}
          formation={selectedFormation}
        />
      )}
    </>
  );
};

export default FormationContent;
