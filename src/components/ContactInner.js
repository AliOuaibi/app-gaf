import React, {useRef, useState} from "react";
import {
  FaCalculator,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactInner = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [subject, setSubject] = useState("");

  const serviceId = process.env.REACT_APP_SERVICE_ID
  const templateContactId = process.env.REACT_APP_TEMPLATE_CONTACT_ID
  const publicKey = process.env.REACT_APP_PUBLIC_KEY

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const fieldsToValidate = [
    { name: "user_name", error: "Le nom est requis." },
    { name: "user_email", error: "L'email est requis.", regex: /\S+@\S+\.\S+/, invalidError: "L'email n'est pas valide." },
    { name: "user_phone", error: "Le numéro de téléphone est requis." },
    { name: "subject", error: "Le sujet est requis." },
    { name: "message", error: "Le message est requis." }
  ];

  const validateForm = (form) => {
    const formData = new FormData(form.current);
    const newErrors = {};

    fieldsToValidate.forEach((field) => {
      const value = formData.get(field.name);
      if (!value) {
        newErrors[field.name] = field.error;
      } else if (field.regex && !field.regex.test(value)) {
        newErrors[field.name] = field.invalidError;
      }
    });

    return newErrors;
  };

  const sendEmail = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Veuillez corriger les erreurs avant d'envoyer.");
      return;
    }

    emailjs
      .sendForm(serviceId, templateContactId, form.current, publicKey)
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Votre email a été envoyé avec succès !");
            form.current.reset();
          }
        },
        (error) => {
          if (error.text !== "OK") {
            toast.success("Votre email n'a pas pu être envoyé !");
          }
        }
      );
  };

  return (
    <>
      <style>
        {`
          .error-text {
            color: red;
            font-size: 0.9em;
            margin-top: 5px;
          }
        `}
      </style>
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className='container'>
        <div className='contact-area mg-top-120 mb-120'>
          <div className='row g-0 justify-content-center'>
            <div className='col-lg-7'>
              <form
                className='contact-form text-center'
                ref={form}
                onSubmit={sendEmail}
              >
                <h3>CONCTATEZ-NOUS</h3>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaUserAlt />
                      </label>
                      <input
                        type='text'
                        placeholder='Votre nom et prénom'
                        name='user_name'
                      />
                      {errors.user_name && <p className="error-text">{errors.user_name}</p>}
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaRegEnvelope />
                      </label>
                      <input
                        type='email'
                        placeholder='Votre adresse mail'
                        name='user_email'
                      />
                      {errors.user_email && <p className="error-text">{errors.user_email}</p>}
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-input-inner'>
                      <label>
                        <FaCalculator />
                      </label>
                      <input
                        type='text'
                        placeholder='Votre numéro de téléphone'
                        name="user_phone"
                      />
                      {errors.user_phone && <p className="error-text">{errors.user_phone}</p>}
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-select-inner'>
                      <label>
                        <FaFileAlt />
                      </label>
                      <select
                        className="single-select"
                        name="subject"
                        value={subject}
                        onChange={handleSubjectChange}
                      >
                        <option value="">Sujet</option>
                        <option value={"FORMATION"}>FORMATION</option>
                        <option value={"DEVENIR CHAUFFEUR"}>DEVENIR CHAUFFEUR</option>
                        <option value={"DEVENIR SOUS-TRAITANT"}>DEVENIR SOUS-TRAITANT</option>
                        <option value={"Autres demande"}>Autres sujet</option>
                      </select>
                      {errors.subject && <p className="error-text">{errors.subject}</p>}
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='single-input-inner'>
                      <label>
                        <FaPencilAlt/>
                      </label>
                      <textarea
                        placeholder='Votre message'
                        defaultValue={""}
                        id='massage'
                        name="message"
                      />
                      {errors.message && <p className="error-text">{errors.message}</p>}
                    </div>
                  </div>
                  <div className='col-12'>
                    <button className='btn btn-base' type='submit'>
                      {" "}
                      ENVOYER VOTRE MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className='col-lg-5'>
              <div className='contact-information-wrap'>
                <h3>INFORMATION</h3>
                <div className='single-contact-info-wrap'>
                  <h6>Numéro de téléphone:</h6>
                  <div className='media'>
                    <div className='icon'>
                      <FaPhoneAlt />
                    </div>
                    <div className='media-body'>
                      <p>+33 6 17 68 35 48</p>
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap'>
                  <h6>Adresse Mail:</h6>
                  <div className='media'>
                    <div className='icon' style={{ background: "#080C24" }}>
                      <FaRegEnvelope />
                    </div>
                    <div className='media-body'>
                      <p>contact@groupegaf.fr</p>
                    </div>
                  </div>
                </div>
                <div className='single-contact-info-wrap mb-0'>
                  <h6>Localisation:</h6>
                  <div className='media'>
                    <div className='icon' style={{ background: "#565969" }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div className='media-body'>
                      <p>3 Rue Jules Guesde</p>
                      <p>91130 Ris-Orangis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='contact-g-map'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2636.953259513338!2d2.3999342125507157!3d48.629876471182435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5de6611803391%3A0xa5d37e8e95283f43!2s3%20Rue%20Jules%20Guesde%2C%2091130%20Ris-Orangis!5e0!3m2!1sfr!2sfr!4v1726300878806!5m2!1sfr!2sfr"
          loading="lazy"
          title="Carte de localisation de l'entreprise"
          allowFullScreen
        >
        </iframe>
      </div>
    </>
  );
};

export default ContactInner;
