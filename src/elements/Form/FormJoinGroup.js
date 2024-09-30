import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaPencilAlt, FaRegEnvelope, FaUserAlt, FaFileAlt } from "react-icons/fa";
import { Toaster, toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const FormJoinGroup = ({ title }) => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [fileData, setFileData] = useState(null);


  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateContactId = process.env.REACT_APP_TEMPLATE_CONTACT_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;
  const cloudName = process.env.REACT_APP_CLOUD_NAME;

  const fieldsToValidate = [
    { name: "user_name", error: "Le nom est requis." },
    {
      name: "user_email",
      error: "L'email est requis.",
      regex: /\S+@\S+\.\S+/,
      invalidError: "L'email n'est pas valide.",
    },
    { name: "user_phone", error: "Le numéro de téléphone est requis." },
    { name: "message", error: "Le message est requis." },
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

    if (!fileData) {
      newErrors["cv_file"] = "Le CV est requis.";
    }

    return newErrors;
  };

  const handleFileUpload = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", uploadPreset);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
        method: "POST",
        body: data,
      });

      const fileData = await response.json();
      return fileData.secure_url; // Retourne l'URL sécurisée du fichier
    } catch (error) {
      toast.error("Erreur lors du téléversement du fichier.");
      return null;
    }
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    const allowedFormats = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

    if (!allowedFormats.includes(file.type)) {
      alert("Seuls les fichiers PDF, DOC ou DOCX sont autorisés.");
      return;
    }

    if (file) {
      const url = await handleFileUpload(file);
      setFileData({ filename: file.name, url });
    }
  };

  const sendEmail = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      toast.error("Veuillez corriger les erreurs avant d'envoyer.");
      return;
    }

    const formData = new FormData(form.current);
    const templateParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      user_phone: formData.get("user_phone"),
      message: formData.get("message"),
      file_link: fileData.url,
      subject: `Candidature pour le poste: ${title}`
    };

    emailjs.send(serviceId, templateContactId, templateParams, publicKey).then(
      (result) => {
        if (result.text === "OK") {
          toast.success("Votre email a été envoyé avec succès !");
          form.current.reset();
          setFileData(null);
        }
      },
      (error) => {
        toast.error("Votre email n'a pas pu être envoyé.");
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
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <form className="contact-form text-center" ref={form} onSubmit={sendEmail}>
          <div>
            <div className="single-input-inner">
              <label>
                <FaUserAlt />
              </label>
              <input type="text" placeholder="Votre nom et prénom" name="user_name" />
              {errors.user_name && <p className="error-text">{errors.user_name}</p>}
            </div>
          </div>
          <div>
            <div className="single-input-inner">
              <label>
                <FaRegEnvelope />
              </label>
              <input type="email" placeholder="Votre adresse mail" name="user_email" />
              {errors.user_email && <p className="error-text">{errors.user_email}</p>}
            </div>
          </div>
          <div>
            <div className="single-input-inner">
              <label>
                <FaPhoneAlt />
              </label>
              <input
                type="text"
                placeholder="Votre numéro de téléphone"
                name="user_phone"
              />
              {errors.user_phone && <p className="error-text">{errors.user_phone}</p>}
            </div>
          </div>
          <div className="col-12">
            <div className="single-input-inner">
              <label>
                <FaPencilAlt />
              </label>
              <textarea
                placeholder="Votre message"
                defaultValue={""}
                id="message"
                name="message"
              />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
          </div>

          <div className="col-12">
            <div className="single-input-inner">
              <label>
                <FaFileAlt />
              </label>
              <input
                type="file"
                name="cv_file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
              {errors.cv_file && <p className="error-text">{errors.cv_file}</p>}
            </div>
          </div>

          <div className="col-12">
            <button className="btn btn-base" type="submit">
              {" "}
              ENVOYER VOTRE CANDIDATURE
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormJoinGroup;
