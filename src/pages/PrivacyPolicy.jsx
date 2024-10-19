import React, {Fragment} from 'react';
import styles from './PrivacyPolicy.module.scss';
import FooterBottomOne from "../components/FooterBottomOne";
import NavbarOne from "../components/NavbarOne";

const PrivacyPolicy = () => {
  return (
    <>
      <Fragment>
        <NavbarOne/>
        <div className={styles.privacyContainer}>
          <h2>Politique de Confidentialité de GAF (Groupe A Fret)</h2>

          <section>
            <h3>1. Introduction</h3>
            <p>
              Chez <strong>Groupe A Fret</strong> (ci-après "GAF", "nous", "notre" ou "nos"), nous nous engageons à
              protéger
              et respecter votre vie privée. La présente Politique de Confidentialité explique quelles informations
              personnelles nous collectons, comment nous les utilisons et comment elles sont protégées.
            </p>
          </section>

          <section>
            <h3>2. Informations que Nous Collectons</h3>
            <p>Nous collectons et traitons plusieurs types d'informations personnelles, notamment :</p>
            <ul>
              <li>Nom, prénom</li>
              <li>Coordonnées (adresse email, numéro de téléphone)</li>
              <li>Informations de facturation et de paiement</li>
              <li>Adresse de livraison (si applicable)</li>
              <li>Données de navigation sur notre site web (cookies, adresses IP, etc.)</li>
            </ul>
            <p>
              Ces données sont collectées directement auprès de vous lorsque vous interagissez avec notre site ou lors
              d'une communication avec nous.
            </p>
          </section>

          <section>
            <h3>3. Utilisation des Informations Collectées</h3>
            <p>Nous utilisons les informations que nous collectons aux fins suivantes :</p>
            <ul>
              <li>Pour traiter vos commandes et assurer le suivi de la livraison</li>
              <li>Pour répondre à vos demandes et questions</li>
              <li>Pour améliorer nos services et personnaliser votre expérience sur notre site</li>
              <li>Pour des raisons de sécurité, de conformité légale et pour prévenir la fraude</li>
            </ul>
          </section>

          <section>
            <h3>4. Partage des Informations</h3>
            <p>
              Nous nous engageons à ne pas vendre, louer ou partager vos informations personnelles à des tiers à des
              fins
              commerciales. Toutefois, nous pouvons partager vos informations avec :
            </p>
            <ul>
              <li>Des prestataires de services tiers (pour le traitement des paiements, la livraison, etc.)</li>
              <li>Les autorités compétentes, si la loi l'exige ou pour protéger nos droits légaux</li>
            </ul>
          </section>

          <section>
            <h3>5. Protection des Données</h3>
            <p>
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour protéger vos
              informations
              personnelles contre tout accès non autorisé, modification, divulgation ou destruction. Nous utilisons des
              protocoles de sécurité comme le cryptage des données et l'accès restreint à ces informations.
            </p>
          </section>

          <section>
            <h3>6. Vos Droits</h3>
            <p>
              Conformément à la réglementation en matière de protection des données, vous avez le droit :
            </p>
            <ul>
              <li>D'accéder aux informations que nous détenons à votre sujet</li>
              <li>De demander la correction de vos informations si elles sont inexactes</li>
              <li>De demander la suppression de vos données personnelles</li>
              <li>De vous opposer au traitement de vos données à des fins de marketing direct</li>
            </ul>
            <p>
              Pour exercer ces droits, veuillez nous contacter à l'adresse suivante :
              <a href="mailto:contact@groupegaf.fr">contact@groupegaf.fr</a>.
            </p>
          </section>

          <section>
            <h3>7. Cookies et Technologies Similaires</h3>
            <p>
              Nous utilisons des cookies pour améliorer l'expérience utilisateur sur notre site, analyser l'utilisation
              du
              site et personnaliser le contenu. Vous pouvez à tout moment gérer vos préférences en matière de cookies
              via
              les paramètres de votre navigateur.
            </p>
          </section>

          <section>
            <h3>8. Modifications de cette Politique</h3>
            <p>
              Nous nous réservons le droit de modifier cette Politique de Confidentialité à tout moment. Toute
              modification
              sera publiée sur cette page. Nous vous encourageons à consulter régulièrement cette politique pour rester
              informé(e) de nos pratiques de gestion des données.
            </p>
          </section>

          <section>
            <h3>9. Contact</h3>
            <p>
              Si vous avez des questions ou des préoccupations concernant cette Politique de Confidentialité, veuillez
              nous
              contacter à :
            </p>
            <p>
              <strong>Groupe A Fret (GAF)</strong><br/>
              3 RUE JULES GUESDE, 91130 RIS-ORANGIS<br/>
              SIRET : 89750702600028<br/>
              <a href="mailto:contact@groupegaf.fr">contact@groupegaf.fr</a><br/>
              Téléphone : +33 6 17 68 35 48
            </p>
          </section>

          <footer>
            <p>Date de la dernière mise à jour : <strong>19/10/2024</strong></p>
          </footer>
        </div>
        <FooterBottomOne/>
      </Fragment>
    </>
  );
};

export default PrivacyPolicy;
