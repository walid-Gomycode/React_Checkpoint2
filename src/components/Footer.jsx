import Card from "react-bootstrap/Card";

// Footer simple et léger, sans props ni configuration externe.
// Améliorations:
// - Texte pertinent en français
// - Liens rapides (ancre # à adapter)
// - Coordonnées de contact
// - Année dynamique
// - Bouton "Haut de page" avec défilement fluide
function Footer() {
  const year = new Date().getFullYear();
  const email = "support@example.com";
  const phone = "+1 234 567 890";
  const tel = phone.replace(/\s+/g, "");

  return (
    <Card className="mt-4">
      <Card.Header>À propos</Card.Header>
      <Card.Body>
        <p className="mb-2">
          Notre boutique sélectionne des produits de qualité et vous accompagne
          dans vos achats au quotidien. Besoin d'aide ? Contactez-nous.
        </p>

        <div className="small text-muted">
          Contact: <a href={`mailto:${email}`}>{email}</a> ·{" "}
          <a href={`tel:${tel}`}>{phone}</a>
        </div>

        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
          <small className="text-muted mb-0">© {year} Notre boutique. Tous droits réservés.</small>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Remonter en haut de la page"
          >
            ↑ Haut de page
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Footer;