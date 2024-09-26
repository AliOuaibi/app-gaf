import React from "react";
import "./GlobalStep.css"

const Step3 = ({ nextStep, prevStep, handleChange, values }) => {
  const continueStep = (e) => {
    e.preventDefault();
    nextStep();
  };

  const previousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="step-container">
      <h2>Votre flotte</h2>
      <p>Quels véhicules utilisez-vous ? Veuillez nous indiquer le nombre de types de véhicules et également s'il y a une répartition entre thermique et électrique.</p>

      <form>
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
                onChange={handleChange("vleger")}
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
                placeholder={"Nombre de VL"}
                value={values.vlegerNumber}
                onChange={handleChange("vlegerNumber")}
              />
            </div>
          </div>
        </div>

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
                onChange={handleChange("poidsLourd")}
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
                placeholder={"Nombre de PL"}
                value={values.poidsLourdNumber}
                onChange={handleChange("poidsLourdNumber")}
              />
            </div>
          </div>
        </div>

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
                onChange={handleChange("poidsLourd")}
              />
              <label htmlFor="spl-no">Non</label>
            </div>

            <div className="form-group">
              <input
                type="number"
                id="splNumber"
                placeholder={"Nombre de SPL"}
                value={values.splNumber}
                onChange={handleChange("splNumber")}
              />
            </div>
          </div>
        </div>

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
                placeholder={"Nombre de SPL"}
                value={values.porteCaisseNumber}
                onChange={handleChange("porteCaisseNumber")}
              />
            </div>
          </div>
        </div>

        <h2>Votre expérience</h2>
        <div className="form-group">
          <textarea
            placeholder="Veuillez décrire et nous indiquer les services que vous fournissez. *"
            value={values.experience}
            onChange={handleChange("experience")}
            required
          />
        </div>

        <h2>Vos donneurs d'ordres</h2>
        <div className="form-group">
          <textarea
            placeholder="Veuillez nous fournir vos références. *"
            value={values.references}
            onChange={handleChange("references")}
            required
          />
        </div>

        <div className="form-buttons">
          <button className='btn btn-base' type='submit' onClick={previousStep}>
            {" "}
            PRÉCÉDENT
          </button>

          <button className='btn btn-base' type='submit' onClick={continueStep}>
            {" "}
            SUIVANT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step3;
