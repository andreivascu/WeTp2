# TP Angular – Pokedemo

## Auteur

Projet réalisé dans le cadre du TP d’Angular, par :
VASCU Andrei
JAFFRE Paul


## Présentation

Ce projet est un Pokédex interactif développé avec Angular et TypeScript. Il permet de rechercher, filtrer et afficher les informations des Pokémon en utilisant l’API publique [PokéAPI](https://pokeapi.co/).  
L’objectif est de découvrir les concepts fondamentaux d’Angular : composants, services, data-binding, pipes, communication inter-composants et accès à une API REST.

---

## Prérequis

- **Node.js** (version recommandée : 22, installation via [nvm](https://github.com/nvm-sh/nvm))
- **Angular CLI** (installation globale : `npm install -g @angular/cli`)
- **Navigateur moderne** (Chrome, Firefox, Edge…)

---

## Installation

```sh
# Installez Node.js via nvm
nvm install 22

# Installez Angular CLI
npm install -g @angular/cli

# Clonez le projet ou créez-en un nouveau
ng new pokedemo --standalone=false --routing=true --ssr=false
cd pokedemo

# Installez les dépendances
npm install

# Lancez le serveur de développement
ng serve
```

Accédez à l’application sur [http://localhost:4200/](http://localhost:4200/).

---

## Structure du projet

- **src/app/**
  - `app.component.*` : composant racine
  - `my-component/` : composant principal de recherche et sélection
  - `pokemon.ts` : classe modèle pour les Pokémon
  - `pokedex.ts` : service d’accès à la PokéAPI
  - `filter-pokemon--pipe.pipe.ts` : pipe personnalisé pour filtrer la liste
  - `poke-share-info.ts` : service de partage d’informations entre composants
  - `pokedetail/` : composant d’affichage des détails d’un Pokémon

---

## Fonctionnalités

### 1. Recherche par numéro ou nom

- Un champ `<input>` permet de saisir l’ID ou le nom du Pokémon recherché.
- Data-binding bidirectionnel avec `ngModel` pour synchroniser la vue et le modèle.

### 2. Affichage dynamique

- Un deuxième champ `<input>` en lecture seule affiche la valeur saisie.
- Utilisation de `{{ id }}` pour afficher la valeur en temps réel.

### 3. Liste et filtre des Pokémon

- Classe `Pokemon` définie avec au moins `id` et `nom`.
- Liste fictive puis réelle (via PokéAPI) affichée dans une balise `<select>` avec `*ngFor`.
- Filtre dynamique grâce à un pipe personnalisé :  
  ```typescript
  transform(pokes: any[], property?: string, searchString?: string): any {
    if (!searchString) return pokes;
    return pokes.filter(poke => poke[property].toLowerCase().includes(searchString.toLowerCase()));
  }
  ```
- Champ de recherche pour filtrer la liste.

### 4. Sélection et validation

- Sélection d’un Pokémon via `<select [(ngModel)]="selectedPokemonId">`.
- Bouton « Go ! » qui affiche l’id et le nom du Pokémon sélectionné dans la console.

### 5. Accès à la PokéAPI

- Service Angular (`Pokedex`) injecté via le constructeur et `@Injectable`.
- Méthode pour récupérer la liste des Pokémon :
  ```typescript
  getPokemons(): Observable<PokeDexServiceRes> {
    return this.http.get<PokeDexServiceRes>(url);
  }
  ```
- Méthode pour récupérer les détails d’un Pokémon par id ou nom.

### 6. Affichage des détails

- Composant dédié (`Pokedetail`) qui reçoit les données via `@Input() detail: PokeDetail | undefined`.
- Affichage du nom, de l’id, des capacités et des statistiques du Pokémon sélectionné.
- Utilisation du data-binding et de la syntaxe sécurisée (`pokeDetail?.name`) pour éviter les erreurs.

### 7. Communication inter-composants

- Service de partage (`PokeShareInfo`) basé sur un `Subject` RxJS.
- Méthode `setValue()` pour publier un nouvel id ou nom.
- Méthode `getObservable()` pour souscrire aux changements et mettre à jour l’affichage en temps réel.

### 8. Intégration d’un composant open source (PrimeNG)

PrimeNG et son thème officiel (Aura) sont installés via npm :
npm install primeng @primeuix/themes

Une fois la librairie installée, plusieurs providers doivent être ajoutés à l’application pour activer le thème et les animations :
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

Puis dans providers :
provideAnimationsAsync(),
providePrimeNG({
  theme: {
    preset: Aura
  }
})

Import du module Button
import { ButtonModule } from 'primeng/button';

Enregistrement du module dans la liste des imports du module Angular :
imports: [
  ...
  ButtonModule
]

Composant de démonstration : PrimeButtonDemo
Ce composant sert uniquement à valider l’intégration de PrimeNG.
Il n’a pas de logique métier, mais il montre que la librairie est bien installée et fonctionnelle.

import { Component } from '@angular/core';
@Component({
  selector: 'prime-button-demo',
  standalone: false,
  templateUrl: './prime-button-demo.html',
  styleUrl: './prime-button-demo.css'
}) 
export class PrimeButtonDemo {}


Contenu HTML associé :
<p-button label="Check" icon="pi pi-check"></p-button>

Le composant est ajouté dans app.html pour être visible à l’écran :
<prime-button-demo></prime-button-demo>

---

## Sécurité

Angular protège naturellement contre les attaques XSS grâce à son système de binding et de sanitization.  
Les valeurs insérées dans le DOM via `{{ }}` ou `[property]` sont automatiquement échappées, empêchant l’exécution de code malveillant.

---

## Bonnes pratiques et points d’attention

- **Typescript** : Toujours typer vos variables et utiliser `| undefined` si une donnée peut être absente.
- **Services** : Centraliser l’accès aux API et le partage d’état pour éviter la duplication de code.
- **Observables** : Utiliser RxJS pour la communication et la réactivité entre composants.
- **Data-binding** : Privilégier le binding bidirectionnel pour une interface utilisateur fluide.
- **Séparation des responsabilités** : Un composant = une fonctionnalité claire.

---

## Pour aller plus loin

Affichage Pokémon : 
  Composant PokeCard : affiche le nom et l’image du Pokémon sélectionné.
  S’affiche uniquement quand un Pokémon est choisi (*ngIf="pokeDetail").
  Utilise PrimeNG p-card pour le style.
  Intégré dans MyComponent avec :
<poke-card [selectedPokemonId]="pokeDetail.id" [pokemonName]="pokeDetail.name"></poke-card>

---


## Liens utiles

- [Documentation Angular](https://angular.io/docs)
- [PokéAPI](https://pokeapi.co/)
- [Guide Angular CLI](https://angular.io/cli)
- [RxJS](https://rxjs.dev/)
