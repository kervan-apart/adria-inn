// ═══════════════════════════════════════════════════
//  ADRIA INN — config.js
//  Modifier uniquement ce fichier pour changer
//  les prix et les photos principales des chambres.
//  Pas besoin de toucher à index.html ou style.css.
// ═══════════════════════════════════════════════════

const CONFIG = {

  // ── PRIX DES CHAMBRES (en euros, taxes incluses) ──
  prix: {
    double:        70,   // Chambre Double Supérieure
    triple_deluxe: 85,   // Chambre Triple Deluxe
    triple_balcon: 90,   // Chambre Triple avec Balcon
    familiale:     95,   // Chambre Quadruple Familiale
  },

  // ── PHOTO PRINCIPALE DE CHAQUE CHAMBRE ──
  // Indiquer le chemin exact de la photo sur GitHub
  photos: {
    double:        'images/chambres/double-01.png',
    triple_deluxe: 'images/chambres/triple-deluxe-02.png',
    triple_balcon: 'images/chambres/balcon-01.png',
    familiale:     'images/chambres/familiale-01.png',
  },

};
