# Guide de modification — Adria Inn
## Comment changer les prix et les photos

---

## 1. Changer un prix

### Étape 1 — Ouvrir le fichier config.js sur GitHub
1. Allez sur **github.com**
2. Connectez-vous au compte **kervan-apart**
3. Ouvrez le dépôt **adria-inn** (ou **adria-inn2**)
4. Cliquez sur le fichier **config.js**
5. Cliquez sur l'icône **crayon** ✏️ en haut à droite pour modifier

### Étape 2 — Modifier le prix
Vous verrez ce bloc :

```
prix: {
    double:        70,   // Chambre Double Supérieure
    triple_deluxe: 85,   // Chambre Triple Deluxe
    triple_balcon: 90,   // Chambre Triple avec Balcon
    familiale:     95,   // Chambre Quadruple Familiale
},
```

Changez simplement le chiffre. Par exemple, pour passer la Double à 75€ :

```
double: 75,
```

> ⚠️ Ne touchez pas aux virgules, guillemets ou autres signes.

### Étape 3 — Sauvegarder
1. Faites défiler vers le bas
2. Cliquez sur **Commit changes**
3. Cliquez à nouveau sur **Commit changes** pour confirmer
4. Attendez 1 à 2 minutes
5. Actualisez le site — le nouveau prix s'affiche

---

## 2. Changer la photo principale d'une chambre

### Étape 1 — Uploader la nouvelle photo sur GitHub
1. Dans le dépôt, naviguez vers le dossier **images/chambres/**
2. Cliquez sur **Add file → Upload files**
3. Choisissez votre photo depuis votre téléphone ou ordinateur
4. Donnez-lui un nom simple, sans espaces ni accents (ex: `double-nouvelle.png`)
5. Cliquez sur **Commit changes**

### Étape 2 — Indiquer le nouveau nom dans config.js
1. Ouvrez **config.js** avec le crayon ✏️
2. Trouvez ce bloc :

```
photos: {
    double:        'images/chambres/double-01.png',
    triple_deluxe: 'images/chambres/triple-deluxe-02.png',
    triple_balcon: 'images/chambres/balcon-01.png',
    familiale:     'images/chambres/familiale-01.png',
},
```

3. Remplacez le nom du fichier par le nouveau. Par exemple :

```
double: 'images/chambres/double-nouvelle.png',
```

> ⚠️ Conservez les guillemets simples `'` avant et après le chemin.

### Étape 3 — Sauvegarder
1. Cliquez sur **Commit changes** → **Commit changes**
2. Attendez 1 à 2 minutes
3. Actualisez le site — la nouvelle photo s'affiche

---

## Règles à respecter

| ✅ Autorisé | ❌ À éviter |
|---|---|
| Changer les chiffres des prix | Supprimer des virgules ou accolades |
| Changer les noms de fichiers photos | Modifier index.html ou style.css |
| Ajouter des photos avec des noms simples | Utiliser des espaces dans les noms de fichiers |

---

## En cas de problème

Si le site ne s'affiche plus correctement après une modification :
1. Retournez dans **config.js** avec le crayon ✏️
2. Remettez les valeurs d'origine
3. Sauvegardez

Les fichiers **index.html** et **style.css** ne doivent jamais être modifiés.
