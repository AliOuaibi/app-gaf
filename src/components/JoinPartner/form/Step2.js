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
      <h2>Vos domaines d'activité</h2>
      <p>Quels sont les services fournis par votre entreprise ?</p>

      <form>
        {/* Transport - enlèvement et livraison */}
        <div className="form-group-radio">
          <label>Transport - enlèvement et livraison</label>
          <div className="form-group-radio-options">
            <div>
              <input
                type="radio"
                id="transport-yes"
                name="transport"
                value="Oui"
                checked={values.transport === "Oui"}
                onChange={handleChange("transport")}
              />
              <label htmlFor="transport-yes">Oui</label>
            </div>
            <div>
              <input
                type="radio"
                id="transport-no"
                name="transport"
                value="Non"
                checked={values.transport === "Non"}
                onChange={handleChange("transport")}
              />
              <label htmlFor="transport-no">Non</label>
            </div>
          </div>
        </div>

        <div className="form-group-radio">
          <label>Navette longue distance (national)</label>
          <div className="form-group-radio-options">
            <div>
              <input
                type="radio"
                id="navette-yes"
                name="navette"
                value="Oui"
                checked={values.navette === "Oui"}
                onChange={handleChange("navette")}
              />
              <label htmlFor="navette-yes">Oui</label>
            </div>
            <div>
              <input
                type="radio"
                id="navette-no"
                name="navette"
                value="Non"
                checked={values.navette === "Non"}
                onChange={handleChange("navette")}
              />
              <label htmlFor="navette-no">Non</label>
            </div>
          </div>
        </div>

        <div className="form-group-radio">
          <label>Tri</label>
          <div className="form-group-radio-options">
            <div>
              <input
                type="radio"
                id="tri-yes"
                name="tri"
                value="Oui"
                checked={values.tri === "Oui"}
                onChange={handleChange("tri")}
              />
              <label htmlFor="tri-yes">Oui</label>
            </div>
            <div>
              <input
                type="radio"
                id="tri-no"
                name="tri"
                value="Non"
                checked={values.tri === "Non"}
                onChange={handleChange("tri")}
              />
              <label htmlFor="tri-no">Non</label>
            </div>
          </div>
        </div>

        <div className="form-group-radio">
          <label>Véhicules respectueux de l'environnement</label>
          <div className="form-group-radio-options">
            <div>
              <input
                type="radio"
                id="electric"
                name="vehicules"
                value="Électriques"
                checked={values.vehicules === "Électriques"}
                onChange={handleChange("vehicules")}
              />
              <label htmlFor="electric">Électriques</label>
            </div>
            <div>
              <input
                type="radio"
                id="gaz"
                name="vehicules"
                value="Gaz"
                checked={values.vehicules === "Gaz"}
                onChange={handleChange("vehicules")}
              />
              <label htmlFor="gaz">Gaz</label>
            </div>
            <div>
              <input
                type="radio"
                id="oleo"
                name="vehicules"
                value="Oleo100"
                checked={values.vehicules === "Oleo100"}
                onChange={handleChange("vehicules")}
              />
              <label htmlFor="oleo">Oleo100</label>
            </div>
            <div>
              <input
                type="radio"
                id="aucun"
                name="vehicules"
                value="Aucun"
                checked={values.vehicules === "Aucun"}
                onChange={handleChange("vehicules")}
              />
              <label htmlFor="aucun">Aucun</label>
            </div>
          </div>
        </div>


        <h2>Votre domaine d'application</h2>
        <p>Veuillez nous indiquer les codes postaux dans lesquels votre entreprise est active.</p>

        {/* Départements de chalandise */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Départements de chalandise *"
            value={values.departments}
            onChange={handleChange("departments")}
            required
          />
        </div>

        {/* Zones du code postal */}
        <div className="form-group">
          <input
            type="text"
            placeholder="Zone(s) du code postal *"
            value={values.zones}
            onChange={handleChange("zones")}
            required
          />
        </div>

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
