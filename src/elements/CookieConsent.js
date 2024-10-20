import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [cookies, setCookie] = useCookies(['userConsent']);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!cookies.userConsent) {
      setIsVisible(true);
    }
  }, [cookies]);

  const handleAccept = () => {
    setCookie('userConsent', 'accepted', { path: '/', maxAge: 31536000 }); // 1 an
    setIsVisible(false); // Masquer la bannière
  };

  const handleReject = () => {
    setCookie('userConsent', 'rejected', { path: '/', maxAge: 31536000 }); // 1 an
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <p>
        Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez accepter ou refuser les cookies non essentiels.
      </p>
      <button className="accept" onClick={handleAccept}>Accepter</button>
      <button className="reject" onClick={handleReject}>Refuser</button>
    </div>
  );
};

export default CookieConsent;
