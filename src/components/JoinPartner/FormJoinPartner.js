import React from "react";
import { FaClipboardList } from "react-icons/fa"; // Import de l'icône
import "./FormJoinPartner.css";
import FormFlow from "./form/FormFlow"; // Import du fichier CSS

const FormJoinPartner = () => {
  return (
    <section className="form-join-partner">
      <div className="container" style={{marginBottom: "100px"}}>
        <div className="icon-container">
          <hr className="line" />
          <FaClipboardList className="icon" />
          <hr className="line" />
        </div>
        <h2 className="title">VOUS ÊTES INTÉRESSÉ ?</h2>
        <p className="description">
          Vous remplissez les conditions requises et souhaitez postuler sans engagement pour collaborer avec nous ?
          Remplissez simplement notre formulaire de contact. Nous vous contacterons dans les plus brefs délais.
        </p>
      </div>

      <FormFlow />
    </section>
  );
};

export default FormJoinPartner;
