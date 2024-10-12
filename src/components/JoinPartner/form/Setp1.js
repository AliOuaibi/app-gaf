import React, { useState } from "react";
import { FaBuilding, FaCalendarAlt, FaBalanceScale, FaBarcode, FaChartLine, FaUser, FaPhone, FaEnvelope, FaGlobe, FaMapMarkerAlt } from "react-icons/fa";
import "./GlobalStep.css"

const Step1 = ({ nextStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.companyName) tempErrors.companyName = "Nom de l'entreprise requis";
    if (!values.creationDate) tempErrors.creationDate = "Date de création requise";
    if (!values.legalForm) tempErrors.legalForm = "Forme juridique requise";
    if (!values.sirenCode) tempErrors.sirenCode = "Code SIREN requis";
    if (!values.revenue) tempErrors.revenue = "Chiffre d'affaires requis";
    if (!values.contactPerson) tempErrors.contactPerson = "Personne à contacter requise";
    if (!values.phone) tempErrors.phone = "Numéro de téléphone requis";
    if (!values.email) tempErrors.email = "Email requis";
    if (!values.address) tempErrors.address = "Adresse requise";
    if (!values.zipCode) tempErrors.zipCode = "Code postal requis";
    if (!values.city) tempErrors.city = "Ville requise";
    if (!values.country) tempErrors.country = "Pays requis";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const continueStep = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
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
        {errors.companyName && <p className="error-message">{errors.companyName}</p>}

        {/* Date de création */}
        <div className="form-group">
          <FaCalendarAlt className="form-icon"/>
          <label htmlFor="creationDate">Date de création *</label>
          <input
            type="date"
            value={values.creationDate}
            onChange={handleChange("creationDate")}
            required
          />
        </div>
        {errors.creationDate && <p className="error-message">{errors.creationDate}</p>}

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
        {errors.legalForm && <p className="error-message">{errors.legalForm}</p>}

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
        {errors.sirenCode && <p className="error-message">{errors.sirenCode}</p>}

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
        {errors.revenue && <p className="error-message">{errors.revenue}</p>}

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
        {errors.contactPerson && <p className="error-message">{errors.contactPerson}</p>}

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
        {errors.phone && <p className="error-message">{errors.phone}</p>}

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
        {errors.email && <p className="error-message">{errors.email}</p>}

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
        {errors.address && <p className="error-message">{errors.address}</p>}

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
        {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}

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
        {errors.city && <p className="error-message">{errors.city}</p>}

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
        {errors.country && <p className="error-message">{errors.country}</p>}

        <button className='btn btn-base' type='submit' onClick={continueStep}>
          SUIVANT
        </button>
      </form>
    </div>
  );
};

export default Step1;
