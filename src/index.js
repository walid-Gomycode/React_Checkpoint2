import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import global du CSS Bootstrap pour les composants et utilitaires
import 'bootstrap/dist/css/bootstrap.min.css';

// Création du point d'ancrage React (root) à partir de l'élément #root dans index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendu de l'application dans React.StrictMode (aide au repérage de problèmes potentiels)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);