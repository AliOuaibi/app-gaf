import React, { useState } from "react";
import "./GlobalStep.css";

const Step2 = ({ nextStep, prevStep, handleChange, values }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!values.employees) tempErrors.employees = "Nombre d'employés requis";
    if (!values.drivers) tempErrors.drivers = "Nombre de chauffeurs requis";
    if (!values.manutention) tempErrors.manutention = "Personnel de manutention requis";
    if (!values.licenceCopies) tempErrors.licenceCopies = "Nombre de copies de licence requis";

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
        {errors.employees && <p className="error-message">{errors.employees}</p>}

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
        {errors.drivers && <p className="error-message">{errors.drivers}</p>}

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
        {errors.manutention && <p className="error-message">{errors.manutention}</p>}

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
        {errors.licenceCopies && <p className="error-message">{errors.licenceCopies}</p>}

        <div className="form-buttons">
          <button className="btn btn-base left" type="submit" onClick={previousStep}>
            {" "}
            PRÉCÉDENT
          </button>

          <button className="btn btn-base right" type="submit" onClick={continueStep}>
            {" "}
            SUIVANT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Step2;
