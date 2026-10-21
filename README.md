# SPIRIT 12

Application web d'enseignement spirituel et d'accompagnement personnalisé par agents IA.

## Vision
Aider chaque utilisateur à transformer des enseignements en actions quotidiennes réalistes, suivies et ajustables — sans promettre une réussite garantie ni présenter les lois spirituelles comme des lois scientifiques.

## Fonctionnalités (MVP)
- Inscription, connexion, profil et préférences
- Questionnaire de départ et parcours personnalisé (21, 30, 60, 90, 180 jours)
- Bibliothèque des 12 lois spirituelles
- Missions quotidiennes et journal privé
- Agents IA encadrés (Profil, Enseignement, Planificateur, Coach)
- Suivi de progression et bilans
- Export/suppression des données (RGPD)

## Stack technique
- **Frontend/Backend**: Next.js 15 (App Router) + TypeScript
- **Styles**: Tailwind CSS
- **Authentification/BDD**: Supabase (Auth + PostgreSQL + RLS)
- **IA**: OpenAI (côté serveur uniquement)
- **Validation**: Zod
- **Déploiement**: Vercel

## Installation

1. Cloner le dépôt
```bash
git clone https://github.com/artemys37/SPIRIT-12.git
cd SPIRIT-12
```

2. Installer les dépendances
```bash
npm install
```

3. Configurer les variables d'environnement
```bash
cp .env.example .env.local
# Remplir les valeurs dans .env.local
```

4. Lancer le serveur de développement
```bash
npm run dev
```

## Sécurité
- Clés API uniquement côté serveur
- Row Level Security (RLS) sur toutes les tables utilisateur
- Validation stricte des sorties IA avec Zod
- Aucun secret dans le dépôt
- Journal privé non exposé aux agents sans consentement

## Documentation
Voir `SPIRIT12_Sprints_OpenCode_GitHub.pdf` pour le cahier des charges complet et le détail des sprints.
