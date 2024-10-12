import React, { useState } from "react";
import "./GlobalStep.css";

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  // Validation des champs obligatoires
  const validate = () => {
    let tempErrors = {};
    if (!values.vleger) tempErrors.vleger = "Sélectionnez une option pour VL";
    if (!values.poidsLourd) tempErrors.poidsLourd = "Sélectionnez une option pour PL";
    if (!values.spl) tempErrors.spl = "Sélectionnez une option pour SPL";
    if (!values.porteCaisse) tempErrors.porteCaisse = "Sélectionnez une option pour Porte-Caisses";
    if (!values.experience) tempErrors.experience = "Veuillez décrire votre expérience";
    if (!values.references) tempErrors.references = "Veuillez fournir vos références";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const continueStep = (e) => {
    e.preventDefault();
    if (validate()) {
      nextStep();
    }
  };

  const previousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  // Gestion du changement de valeur et mise à zéro automatique
  const handleRadioChange = (field, value) => {
    handleChange(field)({ target: { value } }); // Met à jour la valeur du champ radio
    if (value === "Non") {
      // Si "Non" est sélectionné, on met le champ de nombre correspondant à 0
      switch (field) {
        case "vleger":
          handleChange("vlegerNumber")({ target: { value: 0 } });
          break;
        case "poidsLourd":
          handleChange("poidsLourdNumber")({ target: { value: 0 } });
          break;
        case "spl":
          handleChange("splNumber")({ target: { value: 0 } });
          break;
        case "porteCaisse":
          handleChange("porteCaisseNumber")({ target: { value: 0 } });
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="step-container">
      <h2>Votre flotte</h2>
      <p>Quels véhicules utilisez-vous ? Veuillez nous indiquer le nombre de types de véhicules et également s'il y a une répartition entre thermique et électrique.</p>

      <form>
        {/* VL */}
        <div className="form-group-radio">
          <label>VL *</label>
          <div className="form-group-radio-options">
            <div>
              <input
                type="radio"
                id="vleger-yes"
                name="vleger"
                value="Oui"
                checked={values.vleger === "Oui"}
                onChange={() => handleRadioChange("vleger", "Oui")}
              />
              <label htmlFor="vleger-yes">Oui</label>
            </div>
            <div>
              <input
                type="radio"
                id="vleger-no"
                name="vleger"
                value="Non"
                checked={values.vleger === "Non"}
                onChange={handleChange("vleger")}
              />
              <label htmlFor="vleger-no">Non</label>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="vlegerNumber"
                placeholder="Nombre de VL"
                value={values.vlegerNumber}
                onChange={handleChange("vlegerNumber")}
              />
            </div>
          </div>
        </div>
        {errors.vleger && <p className="error-message">{errors.vleger}</p>}

        {/* PL */}
        <div className="form-group-radio">
          <label>PL *</label>
          <div className="form-group-radio-options">
            <div>
              <input
                type="radio"
                id="poidsLourd-yes"
                name="poidsLourd"
                value="Oui"
                checked={values.poidsLourd === "Oui"}
                onChange={() => handleRadioChange("poidsLourd", "Oui")}
              />
              <label htmlFor="poidsLourd-yes">Oui</label>
            </div>
            <div>
              <input
                type="radio"
                id="poidsLourd-no"
                name="poidsLourd"
                value="Non"
                checked={values.poidsLourd === "Non"}
                onChange={handleChange("poidsLourd")}
              />
              <label htmlFor="poidsLourd-no">Non</label>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="poidsLourdNumber"
                placeholder="Nombre de PL"
                value={values.poidsLourdNumber}
                onChange={handleChange("poidsLourdNumber")}
              />
            </div>
          </div>
        </div>
        {errors.poidsLourd && <p className="error-message">{errors.poidsLourd}</p>}

        {/* SPL */}
        <div className="form-group-radio">
          <label>SPL *</label>
          <div className="form-group-radio-options">
            <div>
              <input
                type="radio"
                id="spl-yes"
                name="spl"
                value="Oui"
                checked={values.spl === "Oui"}
                onChange={handleChange("spl")}
              />
              <label htmlFor="spl-yes">Oui</label>
            </div>
            <div>
              <input
                type="radio"
                id="spl-no"
                name="spl"
                value="Non"
                checked={values.spl === "Non"}
                onChange={handleChange("spl")}
              />
              <label htmlFor="spl-no">Non</label>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="splNumber"
                placeholder="Nombre de SPL"
                value={values.splNumber}
                onChange={handleChange("splNumber")}
              />
            </div>
          </div>
        </div>
        {errors.spl && <p className="error-message">{errors.spl}</p>}

        {/* PORTE-CAISSES */}
        <div className="form-group-radio">
          <label>PORTE-CAISSES *</label>
          <div className="form-group-radio-options">
            <div>
              <input
                type="radio"
                id="porte-caisse-yes"
                name="porteCaisse"
                value="Oui"
                checked={values.porteCaisse === "Oui"}
                onChange={handleChange("porteCaisse")}
              />
              <label htmlFor="spl-yes">Oui</label>
            </div>
            <div>
              <input
                type="radio"
                id="porte-caisse-no"
                name="porteCaisse"
                value="Non"
                checked={values.porteCaisse === "Non"}
                onChange={handleChange("porteCaisse")}
              />
              <label htmlFor="spl-no">Non</label>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="porteCaisseNumber"
                placeholder="Nombre de Porte-Caisses"
                value={values.porteCaisseNumber}
                onChange={handleChange("porteCaisseNumber")}
              />
            </div>
          </div>
        </div>
        {errors.porteCaisse && <p className="error-message">{errors.porteCaisse}</p>}

        <h2>Votre expérience</h2>
        <div className="form-group">
          <textarea
            placeholder="Veuillez décrire et nous indiquer les services que vous fournissez. *"
            value={values.experience}
            onChange={handleChange("experience")}
            required
          />
        </div>
        {errors.experience && <p className="error-message">{errors.experience}</p>}

        <h2>Vos donneurs d'ordres</h2>
        <div className="form-group">
          <textarea
            placeholder="Veuillez nous fournir vos références. *"
            value={values.references}
            onChange={handleChange("references")}
            required
          />
        </div>
        {errors.references && <p className="error-message">{errors.references}</p>}

        <div className="form-buttons">
          <button className="btn btn-base" type="submit" onClick={previousStep}>
            PRÉCÉDENT
          </button>

          <button className="btn btn-base" type="submit" onClick={continueStep}>
            SUIVANT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
