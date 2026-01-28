# 💕 Site d'Anniversaire Romantique

Un site web élégant et émotionnel créé avec React, TypeScript et Framer Motion pour célébrer un anniversaire d'une manière unique et mémorable.

## ✨ Fonctionnalités

### 🎨 Design

- **Palette "Night Romantic"** : Ambiance sombre et chaleureuse avec des accents roses et dorés
- **Animations fluides** : Utilisation de Framer Motion pour des transitions douces et émotionnelles
- **Design mobile-first** : Optimisé pour tous les écrans, notamment les smartphones
- **Particules animées** : Effet de particules flottantes en arrière-plan

### 📄 Sections

1. **Hero Section** : Page d'accueil avec animation de cœur pulsant et titre cinématique
2. **Date Spéciale** : Compte à rebours ou affichage de date importante
3. **Galerie** : Collection de 6 photos personnalisées avec légendes émotionnelles
4. **Message Personnel** : Message d'amour personnalisé avec typographie raffinée
5. **Message Final** : Conclusion douce avec animations séquencées
6. **Footer** : Footer minimaliste avec animation de cœur

### 🎞️ Animations

- Apparitions en fade-in/slide
- Pulsations subtiles des icônes de cœur
- Zoom imperceptible sur les images de fond
- Animations déclenchées à l'entrée dans la vue
- Particules flottantes en arrière-plan

## 🛠️ Technologies

- **React 18** : Framework UI
- **TypeScript** : Typage statique
- **Vite** : Build tool rapide
- **Framer Motion** : Bibliothèque d'animations
- **Tailwind CSS** : Framework CSS utilitaire
- **Lucide React** : Icônes modernes

## 🚀 Installation

```bash
# Cloner le repository
git clone <url-du-repo>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

## 📜 Scripts disponibles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Prévisualisation du build
npm run preview

# Vérification TypeScript
npm run typecheck

# Linting

## 🎨 Palette de Couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Night | `#0F172A` | Fond principal |
| Night Light | `#1E293B` | Fond secondaire |
| Romantic Pink | `#F472B6` | Accents principaux |
| Soft Gold | `#F5C27A` | Accents secondaires |
| Muted Text | `#CBD5E1` | Texte secondaire |

## 📁 Structure du Projet
│   ├── PersonalMessage.tsx
│   ├── FinalMessage.tsx
│   ├── Footer.tsx
│   └── Particles.tsx
├── data/
│   └── photos.ts    # Configuration des photos
├── App.tsx          # Composant principal
├── index.css        # Styles globaux
└── main.tsx         # Point d'entrée
```

## 🎯 Personnalisation

### Modifier les photos

Remplacez les images dans `src/assets/` (1.jpeg à 6.jpeg) et mettez à jour les légendes dans `src/data/photos.ts`.

### Modifier les textes

- **Hero** : `src/components/HeroSection.tsx`
- **Messages** : `src/components/PersonalMessage.tsx` et `FinalMessage.tsx`
- **Footer** : `src/components/Footer.tsx`

### Ajuster les couleurs

Modifiez `tailwind.config.js` et `src/index.css` pour changer la palette.

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :

- Mobile : < 768px
- Tablet : 768px - 1024px
- Desktop : > 1024px

## 🌟 Points Forts

- ✅ Typographie élégante avec Playfair Display et Lato
- ✅ Animations optimisées pour les performances
- ✅ Expérience utilisateur émotionnelle et immersive
- ✅ Code TypeScript entièrement typé
- ✅ Mobile-first et accessible

## 💖 Fait avec amour

Créé pour célébrer un moment spécial avec une personne extraordinaire.

---

© 2026 — Tous droits réservés à mon être humain préféré ❤️
