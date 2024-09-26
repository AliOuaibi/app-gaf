import React from "react";
import "./GlobalStep.css"

const Recap = ({prevStep, values, sendEmail}) => {
  const previousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const submitForm = (e) => {
    e.preventDefault();
    const templateParams = {
      companyName: values.companyName,
      creationDate: values.creationDate,
      legalForm: values.legalForm,
      sirenCode: values.sirenCode,
      revenue: values.revenue,
      contactPerson: values.contactPerson,
      phone: values.phone,
      email: values.email,
      website: values.website,
      address: values.address,
      addressComplement: values.addressComplement,
      zipCode: values.zipCode,
      city: values.city,
      country: values.country,
      employees: values.employees,
      drivers: values.drivers,
      manutention: values.manutention,
      licenceCopies: values.licenceCopies,
      vleger: values.vleger,
      vlegerNumber: values.vlegerNumber,
      poidsLourd: values.poidsLourd,
      poidsLourdNumber: values.poidsLourdNumber,
      spl: values.spl,
      splNumber: values.splNumber,
      porteCaisse: values.porteCaisse,
      porteCaisseNumber: values.porteCaisseNumber,
      experience: values.experience,
      references: values.references,
    };
    sendEmail(e, templateParams)
  };

  return (
    <div className="step-container-recap">
      <h2>Récapitulatif de votre candidature</h2>
      <p>Veuillez vérifier vos informations avant de soumettre le formulaire.</p>
      <ul>
        {/* Étape 1 - Informations sur l'entreprise */}
        <li><strong>Nom de l'entreprise / Raison sociale:</strong> {values.companyName}</li>
        <li><strong>Date de création:</strong> {values.creationDate}</li>
        <li><strong>Forme juridique:</strong> {values.legalForm}</li>
        <li><strong>Code SIREN:</strong> {values.sirenCode}</li>
        <li><strong>Dernier chiffre d'affaires:</strong> {values.revenue}</li>
        <li><strong>Personne à contacter:</strong> {values.contactPerson}</li>
        <li><strong>Téléphone:</strong> {values.phone}</li>
        <li><strong>Email:</strong> {values.email}</li>
        <li><strong>Site Internet:</strong> {values.website}</li>
        <li><strong>Adresse:</strong> {values.address}</li>
        <li><strong>Complément d'adresse:</strong> {values.addressComplement}</li>
        <li><strong>Code postal:</strong> {values.zipCode}</li>
        <li><strong>Ville:</strong> {values.city}</li>
        <li><strong>Pays:</strong> {values.country}</li>

        {/* Étape 2 - Domaines d'activité */}
        <li><strong>Nombre d'employés:</strong> {values.employees}</li>
        <li><strong>Nombre de chauffeurs:</strong> {values.drivers}</li>
        <li><strong>Personnel de manutention:</strong> {values.manutention}</li>
        <li><strong>Nombre de copies de licence:</strong> {values.licenceCopies}</li>

        {/* Étape 3 - Flotte et autres détails */}
        <li><strong>VL:</strong> {values.vleger} - <strong>Nombre de camions VL:</strong> {values.vlegerNumber}</li>
        <li><strong>PL:</strong> {values.poidsLourd} - <strong>Nombre de camions PL:</strong> {values.poidsLourdNumber}</li>
        <li><strong>SPL:</strong> {values.spl} - <strong>Nombre de camions SPL:</strong> {values.spl}</li>
        <li><strong>PORTE-CAISSES:</strong> {values.porteCaisse} - <strong>Nombre de porte-caisses:</strong> {values.porteCaisseNumber}</li>
        <li><strong>Votre expérience:</strong> {values.experience}</li>
        <li><strong>Vos références:</strong> {values.references}</li>
      </ul>

      <div className="form-buttons">
        <button className='btn btn-base left' type='button' onClick={previousStep}>
          {" "}
          PRÉCÉDENT
        </button>

        <button className='btn btn-base right' type='submit' onClick={submitForm}>
          {" "}
          SOUMETTRE
        </button>
      </div>
    </div>
  );
};

export default Recap;
