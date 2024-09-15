import React from "react";
import { FaBuilding, FaCalendarAlt, FaBalanceScale, FaBarcode, FaChartLine, FaUser, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import "./GlobalStep.css"

const Step1 = ({ nextStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="step-container">
      <h2>Votre entreprise</h2>
      <p>Indiquez-nous votre adresse, vos coordonnées, votre forme juridique et l'année de création de votre entreprise. <br />
        <em>Les champs marqués d’un astérisque * sont obligatoires</em></p>
      <form>
        {/* Nom de l'entreprise */}
        <div className="form-group">
          <FaBuilding className="form-icon"/>
          <input
            type="text"
            placeholder="Nom de l'entreprise / Raison sociale *"
            value={values.companyName}
            onChange={handleChange("companyName")}
            required
          />
        </div>

        {/* Date de création */}
        <div className="form-group">
          <FaCalendarAlt className="form-icon"/>
          <input
            type="date"
            placeholder="Date de création *"
            value={values.creationDate}
            onChange={handleChange("creationDate")}
            required
          />
        </div>

        {/* Forme juridique */}
        <div className="form-group">
          <FaBalanceScale className="form-icon"/>
          <input
            type="text"
            placeholder="Forme juridique *"
            value={values.legalForm}
            onChange={handleChange("legalForm")}
            required
          />
        </div>

        {/* Code SIREN */}
        <div className="form-group">
          <FaBarcode className="form-icon"/>
          <input
            type="text"
            placeholder="Code SIREN *"
            value={values.sirenCode}
            onChange={handleChange("sirenCode")}
            required
          />
        </div>

        {/* Dernier chiffre d'affaires */}
        <div className="form-group">
          <FaChartLine className="form-icon"/>
          <input
            type="number"
            placeholder="Dernier chiffre d'affaires *"
            value={values.revenue}
            onChange={handleChange("revenue")}
            required
          />
        </div>

        {/* Personne à contacter */}
        <div className="form-group">
          <FaUser className="form-icon"/>
          <input
            type="text"
            placeholder="Personne à contacter *"
            value={values.contactPerson}
            onChange={handleChange("contactPerson")}
            required
          />
        </div>

        {/* Téléphone */}
        <div className="form-group">
          <FaPhone className="form-icon"/>
          <input
            type="tel"
            placeholder="Téléphone *"
            value={values.phone}
            onChange={handleChange("phone")}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <FaEnvelope className="form-icon"/>
          <input
            type="email"
            placeholder="Votre courriel *"
            value={values.email}
            onChange={handleChange("email")}
            required
          />
        </div>

        {/* Site Internet */}
        <div className="form-group">
          <FaGlobe className="form-icon"/>
          <input
            type="url"
            placeholder="Site internet"
            value={values.website}
            onChange={handleChange("website")}
          />
        </div>

        {/* Adresse */}
        <div className="form-group">
          <FaMapMarkerAlt className="form-icon"/>
          <input
            type="text"
            placeholder="Adresse *"
            value={values.address}
            onChange={handleChange("address")}
            required
          />
        </div>

        {/* Complément d'adresse */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Complément d'adresse"
            value={values.addressComplement}
            onChange={handleChange("addressComplement")}
          />
        </div>

        {/* Code postal */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Code postal *"
            value={values.zipCode}
            onChange={handleChange("zipCode")}
            required
          />
        </div>

        {/* Ville */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Ville *"
            value={values.city}
            onChange={handleChange("city")}
            required
          />
        </div>

        {/* Pays */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Pays *"
            value={values.country}
            onChange={handleChange("country")}
            required
            defaultValue="France"
          />
        </div>

        <button className='btn btn-base' type='submit' onClick={continueStep}>
          {" "}
          SUIVANT
        </button>
      </form>
    </div>
  );
};

export default Step1;
