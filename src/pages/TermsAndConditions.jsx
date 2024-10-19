import React, {Fragment} from 'react';
import './TermsAndConditions.scss';
import FooterBottomOne from "../components/FooterBottomOne";
import NavbarOne from "../components/NavbarOne";

const TermsAndConditions = () => {
  return (
    <>
      <Fragment>
        <NavbarOne/>
        <div className="terms-container">
          <h2>Termes et Conditions de GAF (Groupe A Fret)</h2>

          <section>
            <h3>1. Introduction</h3>
            <p>
              Bienvenue sur le site web de <strong>Groupe A Fret</strong> (ci-après "GAF", "nous", "notre", ou "nos").
              En accédant à notre site et en utilisant nos services, vous acceptez de vous conformer et d'être lié
              par les termes et conditions suivants (les "Conditions"). Veuillez lire attentivement ces Conditions
              avant d'utiliser notre site. Si vous n'acceptez pas ces Conditions, vous devez cesser d'utiliser
              immédiatement ce site.
            </p>
          </section>

          <section>
            <h3>2. Définition des Services</h3>
            <p>
              GAF est une entreprise spécialisée dans le transport et la logistique. Nous offrons des services de
              fret, de gestion des chaînes d'approvisionnement, et d'autres services logistiques via ce site web.
              En utilisant notre site, vous pouvez accéder aux informations sur nos services, effectuer des
              demandes de devis, et entrer en contact avec notre service client.
            </p>
          </section>

          <section>
            <h3>3. Accès et Utilisation du Site</h3>

            <h4>3.1 Accès</h4>
            <p>
              L'accès au site est fourni à titre gratuit. Toutefois, nous nous réservons le droit de modifier,
              suspendre ou interrompre le site ou une partie de celui-ci à tout moment sans préavis.
            </p>

            <h4>3.2 Utilisation Acceptable</h4>
            <p>
              Vous acceptez d'utiliser notre site à des fins licites uniquement et de manière conforme aux lois
              applicables. Vous vous engagez à ne pas :
            </p>
            <ul>
              <li>Utiliser le site de manière à enfreindre toute loi ou réglementation en vigueur.</li>
              <li>
                Tenter d’accéder sans autorisation à d'autres systèmes informatiques par le biais du site.
              </li>
              <li>Utiliser le site pour envoyer, recevoir, télécharger ou utiliser tout matériel illégal ou offensant.
              </li>
            </ul>
          </section>

          <section>
            <h3>4. Propriété Intellectuelle</h3>
            <p>
              Tous les contenus, informations, marques commerciales, logos, graphismes, textes, vidéos, et autres
              éléments figurant sur ce site (ci-après "le Contenu") sont la propriété exclusive de GAF ou de ses
              concédants. Vous n'êtes pas autorisé à copier, distribuer, reproduire, ou exploiter le Contenu sans
              notre autorisation préalable expresse et écrite.
            </p>
          </section>

          <section>
            <h3>5. Collecte et Utilisation des Données Personnelles</h3>
            <p>
              Nous respectons la confidentialité des informations personnelles que vous nous fournissez. Pour plus
              d’informations sur la collecte, le traitement et la protection de vos données personnelles, veuillez
              consulter notre <a href="#">Politique de Confidentialité</a>.
            </p>
          </section>

          <section>
            <h3>6. Limitation de Responsabilité</h3>
            <p>
              GAF s’efforce de fournir des informations précises et à jour sur son site web, mais ne garantit pas
              l'exactitude, l'exhaustivité ou la pertinence des informations fournies. GAF décline toute
              responsabilité pour tout dommage direct, indirect, accidentel, ou consécutif résultant de l'utilisation
              ou de l'impossibilité d'utiliser le site.
            </p>
          </section>

          <section>
            <h3>7. Modifications des Termes et Conditions</h3>
            <p>
              Nous nous réservons le droit de modifier ces Conditions à tout moment. Toute modification sera
              publiée sur cette page, et il vous appartient de vérifier régulièrement les Conditions mises à jour.
              Votre utilisation continue du site après toute modification constitue une acceptation des nouvelles
              Conditions.
            </p>
          </section>

          <section>
            <h3>8. Liens vers des Sites Tiers</h3>
            <p>
              Notre site peut contenir des liens vers des sites web tiers. GAF ne peut être tenu responsable du
              contenu ou des pratiques de confidentialité de ces sites tiers. Vous accédez à ces sites sous votre
              propre responsabilité.
            </p>
          </section>

          <section>
            <h3>9. Droit Applicable et Juridiction</h3>
            <p>
              Ces Conditions sont régies par les lois en vigueur en <strong>France</strong>. En cas de litige, les
              parties conviennent de soumettre leur différend à la juridiction exclusive des tribunaux compétents
              de <strong>Paris</strong>.
            </p>
          </section>

          <section>
            <h3>10. Contact</h3>
            <p>
              Si vous avez des questions concernant ces Termes et Conditions, veuillez nous contacter à :
            </p>
            <p>
              <strong>Groupe A Fret (GAF)</strong><br/>
              3 RUE JULES GUESDE 91130 RIS-ORANGIS<br/>
              SIRET: 89750702600028<br/>
              <a href="mailto:contact@groupegaf.fr">contact@groupegaf.fr</a><br/>
              +33 6 17 68 35 48
            </p>
          </section>

        </div>
        <FooterBottomOne/>
      </Fragment>
    </>
  );
};

export default TermsAndConditions;
