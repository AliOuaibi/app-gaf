import React, {useState} from "react";
import {TbClockHour4} from "react-icons/tb";
import {FaInfoCircle} from "react-icons/fa";
import {offers} from "../../data/offers";
import JoinGroupModal from "../../elements/Modal/JoinGroupModal";

const JoinGroupContent = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [show, setShow] = useState(false);

  const handleShow = (formation) => {
    setSelectedOffer(formation);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setSelectedOffer(null);
  };

  return (
    <>
      <div className='service-area style-2 pd-top-115 pd-bottom-80'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7'>
              <div className='section-title text-center'>
                <h4 className='subtitle'>OFRRES D'EMPLOIE</h4>
                <h2 className='title'>ON RECRUTE</h2>
                <p>
                  Chez GROUPE À FRET, l’humain est placé au cœur de la réussite,
                  avec une grande importance accordée aux échanges, à la qualité de vie au travail et à
                  la fidélisation de nos collaborateurs. Vous souhaitez intégrer une équipe dynamique, soudée
                  et investie dans le service apporté aux clients ? Consultez nos offres et rejoignez-nous.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            {offers.map((offer) => {
                const {id, title, contract} = offer
                return (
                  <div className='col-lg-4' key={`offer-card-${id}`}>
                    <div className='single-service-wrap'>
                      <div className='thumb'>
                        <div className='icon'>
                          <FaInfoCircle color="#fff" fontSize={35}/>
                        </div>
                      </div>
                      <div className='details'>
                        <h5>{title}</h5>
                        <p><TbClockHour4 style={{fontSize: "30px", fontWeight: "bold"}}/> {contract}</p>
                        <div className='btn-wrap'>
                          <button
                            className='btn btn-base'
                            type='submit'
                            variant="secondary"
                            onClick={() => handleShow(offer)}
                          >
                            VOIR PLUS
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </div>

      {selectedOffer && (
        <JoinGroupModal
          show={show}
          handleClose={handleClose}
          offer={selectedOffer}
        />
      )}
    </>
  );
};

export default JoinGroupContent;
