import React from "react";
import {Button, Modal} from "react-bootstrap";
const FormationModal = ({ show, handleClose, formation }) => {
  console.log(formation)
  const {id, title, hour, startDate, price, bannerImage} = formation
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Ceci est le contenu de la fenêtre modale.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fermer
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Sauvegarder les modifications
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default FormationModal;