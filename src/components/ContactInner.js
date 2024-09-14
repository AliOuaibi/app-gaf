import React, { useRef } from "react";
import {
  FaCalculator,
  FaFileAlt,
  FaMapMarkerAlt,
  FaPencilAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaUserAlt,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactInner = () => {
  const form = useRef();
  const serviceId = process.env.REACT_APP_SERVICE_ID
  const templateContactId = process.env.REACT_APP_TEMPLATE_CONTACT_ID
  const publicKey = process.env.REACT_APP_PUBLIC_KEY

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        serviceId,
        templateContactId,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Votre email à été envoyé avec succès !");
            form.current[0].value = "";
            form.current[1].value = "";
            form.current[2].value = "";
            form.current[3].value = "";
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
      <Toaster position='bottom-center' reverseOrder={false} />
      {/* contact area start */}
      <div className='container'>
        <div className='contact-area mg-top-120 mb-120'>
          <div className='row g-0 justify-content-center'>
            <div className='col-lg-7'>
              <form
                className='contact-form text-center'
                ref={form}
                onSubmit={sendEmail}
              >
                <h3>VOUS AVEZ UNE REQUÊTE</h3>
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
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-select-inner'>
                      <label>
                        <FaFileAlt />
                      </label>
                      <select className='single-select' name="subject">
                        <option>Sujet</option>
                        <option value={"Info"}>Demande d'informations</option>
                        <option value={"Autres"}>Autres sujet</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-12'>
                    <div className='single-input-inner'>
                      <label>
                        <FaPencilAlt />
                      </label>
                      <textarea
                        placeholder='Votre message'
                        defaultValue={""}
                        id='massage'
                        name="message"
                      />
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
                      <p>+33767665415</p>
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
                      <p>contact@groupe-afret.fr</p>
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
      {/* contact area end */}

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
