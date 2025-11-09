import React from 'react'; // Import de React pour définir un composant fonction
import { product } from '../product'; // Import de l'objet produit (supposé contenir name, etc.)

// Composant Name : affiche uniquement le nom du produit depuis l'objet importé
const Name = () => {
  return (
    <div>
      {/* Titre avec style inline (couleur rose) */}
      <h1 style={{ color: 'pink' }}>
        {product.name /* Affichage du nom du produit */}
      </h1>
    </div>
  );
};

export default Name; // Export du composant pour utilisation ailleurs