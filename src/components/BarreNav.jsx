import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'; // Import des composants Bootstrap

// Barre de navigation principale du site (statique, sans props)
export default function BarreNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      {/* Container pour centrer le contenu horizontalement */}
      <Container>
        {/* Logo / Marque cliquable renvoyant vers la section #home */}
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>

        {/* Bouton hamburger visible sur petits écrans pour ouvrir/fermer le menu */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Zone repliable contenant les liens de navigation */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* me-auto pousse le reste du contenu à droite si présent */}
            <Nav className="me-auto">
            {/* Lien simple vers #home */}
            <Nav.Link href="#home">Home</Nav.Link>
            {/* Autre lien simple */}
            <Nav.Link href="#link">Link</Nav.Link>

            {/* Menu déroulant pour regrouper des actions secondaires */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              {/* Items du menu déroulant */}
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              {/* Séparateur visuel entre groupes d'items */}
              <NavDropdown.Divider />

              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}