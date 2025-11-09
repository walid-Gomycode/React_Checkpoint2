import Card from "react-bootstrap/Card"; // Composant Bootstrap pour un conteneur encadré

// Composant Footer sans props : informations statiques affichées en bas de page
function Footer() {
  // Année dynamique pour éviter une mise à jour manuelle
  const year = new Date().getFullYear();
  // Coordonnées de contact (placeholder)
  const email = "support@example.com";
  const phone = "+1 234 567 890";
  // Format téléphone sans espaces pour lien tel:
  const tel = phone.replace(/\s+/g, "");

  return (
    <Card className="mt-4">
      {/* En-tête du footer */}
      <Card.Header>À propos</Card.Header>
      <Card.Body>
        {/* Texte descriptif de la boutique */}
        <p className="mb-2">
          Notre boutique sélectionne des produits de qualité et vous accompagne
          dans vos achats au quotidien. Besoin d'aide ? Contactez-nous.
        </p>

        {/* Bloc contact : mail et téléphone cliquables */}
        <div className="small text-muted">
          Contact: <a href={`mailto:${email}`}>{email}</a> ·{" "}
          <a href={`tel:${tel}`}>{phone}</a>
        </div>

        {/* Ligne de séparation + copyright + bouton retour haut */}
        <div className="d-flex justify-content-between align-items-center mt-3 pt-3 border-top">
          <small className="text-muted mb-0">© {year} Notre boutique. Tous droits réservés.</small>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Remonter en haut de la page" // Accessibilité : label explicite
          >
            ↑ Haut de page
          </button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Footer; // Export par défaut du composant