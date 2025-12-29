# TP Test Front - PokeDemo
VASCU Andrei 
JAFFRE Paul
## Le Projet

PokeDemo est une application Angular interactive permettant de chercher et d'afficher les informations des Pokémon via l'API PokéAPI. Ce document raconte comment on a mis en place une stratégie de test complète avec **Jest** pour les tests unitaires et **Cypress** pour les tests end-to-end.

---

## Pourquoi des Tests ?

Honnêtement, quand on développe une app, c'est facile de casser quelque chose sans s'en rendre compte. Les tests nous permettent de :
- **Valider** que notre code fonctionne comme prévu
- **Refactoriser** en toute confiance
- **Détecter** les régressions avant qu'elles ne touchent les utilisateurs
- **Documenter** le comportement attendu de chaque composant

---

## La Mise en Place de Jest

Au départ, le projet avait besoin de passer de Karma/Jasmine à Jest. C'était un choix judicieux car Jest est plus rapide, plus simple à configurer, et s'intègre mieux avec Angular 20+.

### Comment on l'a fait

1. **Nettoyage** - Suppression des dépendances Karma/Jasmine
2. **Installation** - Ajout de Jest et ses dépendances Angular
3. **Configuration** - Mise en place de `jest.config.ts`, `setup-jest.ts`, et `tsconfig.spec.json`
4. **Tests** - Écriture des fichiers `.spec.ts` pour chaque composant

Le truc qui prenait du temps ? Aligner les versions. `jest-preset-angular` n'était pas installé initialement, et il y avait des conflits avec TypeScript. Mais rien que du classique à résoudre avec de la patience.

### Ce qu'on a au final

```
✅ 40 tests écrits et passants
✅ 10 fichiers de test créés
✅ 45.56% de couverture de code
✅ 3.5 secondes d'exécution
```

---

## Ce qu'on Teste Réellement

### Les Composants

Chaque composant a des tests qui valident :
- Qu'il se crée correctement
- Que ses propriétés `@Input` sont bien reçues
- Que le template s'affiche
- Que les interactions utilisateur fonctionnent

**Exemple concret** : Le composant `MyComponent` accepte une liste de Pokémon et permet de chercher/filtrer. On teste que le filtrage fonctionne avec des noms entiers, partiels, en minuscules/majuscules.

### Les Services

Les services qui font appel à l'API sont testés avec du mocking HTTP. On ne veut pas faire de vrais appels réseau pendant les tests – c'est lent et peu fiable.

**Exemple** : Le service `Pokedex` récupère la liste des Pokémon. On teste qu'il appelle la bonne URL et qu'il gère les réponses correctement.

### Les Pipes

Le pipe `FilterPokemonPipe` filtre une liste de Pokémon selon une chaîne de recherche. On vérifie qu'il gère les cas limites (liste vide, recherche vide, casse différente).

---

## La Mise en Place de Cypress

Les tests unitaires testent les briques individuelles. Mais est-ce que tout fonctionne *ensemble* ? C'est là que Cypress intervient.

Cypress lance un vrai navigateur, visite l'application, clique sur les boutons, saisit du texte, et vérifie que l'interface répond correctement.

### Les Scénarios Testés

1. **Navigation et chargement** - L'app se charge sans erreur
2. **Interactions utilisateur** - On peut saisir du texte, cliquer sur les boutons
3. **Performance** - La page se charge assez rapidement
4. **Accessibilité** - Les inputs sont accessibles aux lecteurs d'écran

### Le Défi Principal

Au début, les tests échouaient car les sélecteurs CSS étaient trop génériques (`input[type="text"]`). Il a fallu explorer le DOM réel et utiliser des sélecteurs plus précis (`#input1`, `.select-pokemon`).

C'est un bon rappel : **les tests E2E doivent interagir avec l'app réelle**, pas avec ce qu'on *pense* que c'est.

### Résultat Final

```
✅ 18 tests Cypress
✅ Tous passants
✅ 7 tests dans app.cy.ts
✅ 11 tests dans pokemon.cy.ts
✅ ~4 secondes d'exécution
```

---

## La Structure

```
src/app/
├── app.spec.ts                    (le composant racine)
├── pokemon.spec.ts                (la classe modèle)
├── pokedex.spec.ts                (le service API)
├── poke-share-info.spec.ts        (le service de partage)
├── filter-pokemon--pipe-pipe.spec.ts (le pipe de filtrage)
├── poke-card.spec.ts              (la carte Pokémon)
├── prime-button-demo.spec.ts      (le bouton PrimeNG)
├── id-input/id-input.spec.ts      (l'input d'ID)
├── my-component/my-component.spec.ts (le composant principal)
└── pokedetail/pokedetail.spec.ts  (le détail d'un Pokémon)

cypress/e2e/
├── app.cy.ts                      (tests de base)
└── pokemon.cy.ts                  (tests des fonctionnalités)
```

---

## Comment Lancer les Tests

### Tests Unitaires

```bash
npm run test              # Lance une seule fois
npm run test:watch       # Lance en continu (pratique en dev)
npm run test:coverage    # Rapport de couverture
```

### Tests E2E

```bash
# Terminal 1 : lance l'app
npm run start

# Terminal 2 : ouvre Cypress
npm run cypress

# Ou en mode headless
npm run cypress:run
```

---

## Les Chiffres

| Métrique | Valeur |
|----------|--------|
| Tests unitaires | 40 ✅ |
| Tests E2E | 18 ✅ |
| Couverture de code | 45.56% |
| Fichiers de test | 12 |
| Temps total | ~5s |
| Composants testés | 10/10 |

---

## Ce qui a Été Compliqué

1. **Les sélecteurs Cypress** - Fallait vraiment explorer le DOM pour trouver les bons sélecteurs
2. **Les timeouts** - Cypress a besoin que les éléments soient prêts avant d'interagir
3. **Les versions** - Aligner Jest, TypeScript, et Angular n'a pas été trivial

Mais honnêtement, rien que du classique à résoudre en expérimentant.

---

## Ce qu'on a Appris

- **Jest est vraiment rapide** - les 40 tests tournent en moins de 4 secondes
- **Les tests E2E ne remplacent pas les tests unitaires** - ils se complètent
- **Les sélecteurs CSS fragiles** - c'est le truc qui casse le plus facilement dans Cypress
- **Le mocking HTTP** est essentiel pour les services

---

## Les Dépendances Clés

```json
{
  "jest": "^29.7.0",
  "jest-preset-angular": "^14.3.0",
  "ts-jest": "^29.1.1",
  "@types/jest": "^29.5.14",
  "cypress": "^15.8.1"
}
```

---

## Les Cas Limites qu'on Teste

- **Filtrage** avec une liste vide
- **Recherche** sans résultat
- **Casse différente** (majuscule/minuscule)
- **Inputs multiples** en succession rapide
- **Responsive** sur mobile et desktop
- **Performance** au chargement

---

## Prochaines Étapes (Si tu Veux Aller Plus Loin)

- **Augmenter la couverture à 60%+** en testant les cas d'erreur (quand l'API ne répond pas)
- **Tester les navigations** au sein de l'app
- **CI/CD** - GitHub Actions pour que les tests tournent automatiquement
- **Accessibilité** - vérifier que tout fonctionne au clavier sans souris

---

## En Résumé

PokeDemo a maintenant une **suite de tests solide** qui couvre les cas importants. Les tests tournent vite, sont fiables, et on peut refactoriser en toute confiance.

La couverture n'est pas parfaite (45.56%) mais elle couvre les endroits critiques : les services, les pipes, et les composants principaux.

Et surtout, les tests **passent tous** - c'est le plus important ! ✅

---

## Commandes Rapides

```bash
npm run test              # Tests unitaires
npm run test:watch        # Mode watch
npm run test:coverage     # Rapport de couverture
npm run cypress           # Interface Cypress
npm run cypress:run       # Tests E2E sans interface
npm run start             # Démarre l'app
npm run build             # Build pour prod
```

---

**C'est quoi le truc le plus satisfaisant ?** Voir tous les tests passer en vert. 🟢

Fait le 23 décembre 2025.
