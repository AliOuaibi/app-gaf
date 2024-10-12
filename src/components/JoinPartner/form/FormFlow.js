import React, {useState} from "react";
import Step1 from "./Setp1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Recap from "./Recap";
import emailjs from "@emailjs/browser";
import {Toaster, toast} from "react-hot-toast";

const FormFlow = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: "",
    creationDate: "",
    legalForm: "",
    sirenCode: "",
    revenue: "",
    contactPerson: "",
    phone: "",
    email: "",
    website: "",
    address: "",
    addressComplement: "",
    zipCode: "",
    city: "",
    country: "France",
    employees: "",
    drivers: "",
    manutention: "",
    licenceCopies: "",
    vleger: "",
    vlegerNumber: 0,
    poidsLourd: "",
    poidsLourdNumber: 0,
    spl: "",
    splNumber: 0,
    porteCaisse: "",
    porteCaisseNumber: 0,
    experience: "",
    references: ""
  });

  const serviceId = process.env.REACT_APP_SERVICE_ID
  const templateCandidatePartnerId = process.env.REACT_APP_TEMPLATE_CANDIDATE_PARTNER_ID
  const publicKey = process.env.REACT_APP_PUBLIC_KEY

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleChange = (input) => (e) => {
    setFormData({...formData, [input]: e.target.value});
  };

  const sendEmail = (e, templateParams) => {
    e.preventDefault();
    emailjs
      .send(serviceId, templateCandidatePartnerId, templateParams, publicKey)
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Votre candidature a été envoyé avec succès !");
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Votre candidature n'a pas pu être envoyé !");
          }
        }
      );
  };

  switch (currentStep) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Step3 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 4:
      return <>
        <Toaster position='top-center' reverseOrder={false}/>
        <Recap prevStep={prevStep} values={formData} sendEmail={sendEmail}/>
      </>;
    default:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
  }
};

export default FormFlow;
