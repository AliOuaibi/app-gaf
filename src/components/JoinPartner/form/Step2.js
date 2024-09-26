import React from "react";
import "./GlobalStep.css"

const Step2 = ({nextStep, prevStep, handleChange, values}) => {
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
      <form>
        <h2>Vos employés et copies de licence</h2>

        {/* Nombre d'employés */}
        <div className="form-group">
          <input
            type="number"
            placeholder="Nombre d'employés *"
            value={values.employees}
            onChange={handleChange("employees")}
            required
          />
        </div>

        {/* Nombre de chauffeurs */}
        <div className="form-group">
          <input
            type="number"
            placeholder="Nombre de chauffeurs *"
            value={values.drivers}
            onChange={handleChange("drivers")}
            required
          />
        </div>

        {/* Personnel de manutention */}
        <div className="form-group">
          <input
            type="number"
            placeholder="Personnel de manutention *"
            value={values.manutention}
            onChange={handleChange("manutention")}
            required
          />
        </div>

        {/* Nombre de copies de licence */}
        <div className="form-group">
          <input
            type="number"
            placeholder="Nombre de copies de licence *"
            value={values.licenceCopies}
            onChange={handleChange("licenceCopies")}
            required
          />
        </div>

        <div className="form-buttons">
          <button className='btn btn-base left' type='submit' onClick={previousStep}>
            {" "}
            PRÉCÉDENT
          </button>

          <button className='btn btn-base right' type='submit' onClick={continueStep}>
            {" "}
            SUIVANT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
