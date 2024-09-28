import React from "react";
import {Card, Modal} from "react-bootstrap";
import "./FormationModal.scss"
import {TbClockHour4} from "react-icons/tb";
import {FaCalendarAlt, FaEuroSign} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";

const FormationModal = ({ show, handleClose, formation }) => {
  const {
    title
    , hour
    , startDate
    , price
    , bannerImage
    , peopleValid
    , location
    , detail
    , objectif
    , evaluation
  } = formation

  return (
    <Modal show={show} onHide={handleClose} className="content-modal-formation" size="xl">
      <Modal.Header>
        <Modal.Title className="title-modal-formation" >
          <h3>{title}</h3>
          <div>
            <img src={bannerImage} alt={`banner-img-${title}`}/>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="information-formation">
          <div className="content-information">
            <p><FaPeopleGroup style={{fontSize: "30px", fontWeight: "bold"}}/> {peopleValid}</p>
            <p><FaLocationDot style={{fontSize: "30px", fontWeight: "bold"}}/> {location}</p>
            <p><FaCalendarAlt style={{fontSize: "30px", fontWeight: "bold"}}/> {startDate}</p>
          </div>
          <div className="content-information">
            <p><TbClockHour4 style={{fontSize: "30px", fontWeight: "bold"}}/> {hour}</p>
            <p><FaEuroSign style={{fontSize: "30px", fontWeight: "bold"}}/>À partir de {price}</p>
          </div>
        </div>

        <div className="block-details-formation">
          <div >
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>DÉTAIL</Card.Title>
                <Card.Text>
                  {detail && detail.text}
                </Card.Text>
                {detail && detail.list ? (
                  <ul>
                    {detail.list.map((item, i) => (
                      <li key={`li-detail-${i}`}>{item}</li>
                    ))}
                  </ul>
                ) : null
                }
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>OBJECTIFS</Card.Title>
                <Card.Text>
                  {objectif && objectif.text}
                </Card.Text>
                {objectif && objectif.list ? (
                  <ul>
                    {objectif.list.map((item, i) => (
                      <li key={`li-objectif-${i}`}>{item}</li>
                    ))}
                  </ul>
                  ) : null
                }
              </Card.Body>
            </Card>
          </div>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>ÉVALUATION</Card.Title>
                <Card.Text>
                  {evaluation && evaluation.text}
                </Card.Text>
                {evaluation && evaluation.list ? (
                  <ul>
                    {evaluation.list.map((item, i) => (
                      <li key={`li-evaluation-${i}`}>{item}</li>
                    ))}
                  </ul>
                ) : null
                }
              </Card.Body>
            </Card>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-base' type='submit' variant="secondary" onClick={handleClose}>
          Fermer
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default FormationModal;