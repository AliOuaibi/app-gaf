import React from "react";
import {Modal} from "react-bootstrap";
import FormJoinGroup from "../Form/FormJoinGroup";
import "./JoinGroupModal.scss"

const JoinGroupModal = ({ show, handleClose, offer }) => {
  const {title, description} = offer

  return (
    <Modal show={show} onHide={handleClose} className="content-modal-offer" size="xl">
      <Modal.Header>
        <Modal.Title className="title-modal-offer" >
          <h3>{title}</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container-form-join-group">
          <div
            dangerouslySetInnerHTML={{__html: description}}
            className="block-description-offer"
          />
          <div className='contact-area-form-join-group'>
            <FormJoinGroup title={title}/>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-base' onClick={handleClose}>
          Fermer
        </button>
      </Modal.Footer>
    </Modal>
  );
};
export default JoinGroupModal;