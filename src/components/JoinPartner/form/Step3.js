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
        {/* Fourgonnette / Van */}
        <div className="form-group-radio">
          <label>Camion 7.5T *</label>
          <div className="form-group-radio-options">
            <div>
              <input
                type="radio"
                id="camion75-yes"
                name="camion75"
                value="Oui"
                checked={values.camion75 === "Oui"}
                onChange={handleChange("camion75")}
              />
              <label htmlFor="camion75-yes">Oui</label>
            </div>
            <div>
              <input
                type="radio"
                id="camion75-no"
                name="camion75"
                value="Non"
                checked={values.camion75 === "Non"}
                onChange={handleChange("camion75")}
              />
              <label htmlFor="camion75-no">Non</label>
            </div>
            <div className="form-group">
              <input
                type="number"
                id="camion75Number"
                placeholder={"Nombre de camions 7.5T"}
                value={values.camion75Number}
                onChange={handleChange("camion75Number")}
              />
            </div>
          </div>
        </div>


        <div className="form-group-radio">
          <label>Camion 40T *</label>
          <div className="form-group-radio-options">
            <div>
              <input
                type="radio"
                id="camion40-yes"
                name="camion40"
                value="Oui"
                checked={values.camion40 === "Oui"}
                onChange={handleChange("camion40")}
              />
              <label htmlFor="camion40-yes">Oui</label>
            </div>
            <div>
              <input
                type="radio"
                id="camion40-no"
                name="camion40"
                value="Non"
                checked={values.camion40 === "Non"}
                onChange={handleChange("camion40")}
              />
              <label htmlFor="camion40-no">Non</label>
            </div>

            <div className="form-group">
              <input
                type="number"
                id="camion40Number"
                placeholder={"Nombre de camions 40T"}
                value={values.camion40Number}
                onChange={handleChange("camion40Number")}
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
