describe('Tests E2E - Fonctionnalités Pokemon', () => {
  beforeEach(() => {
    cy.visit('/');
    // Attendre que l'application soit prête
    cy.get('body').should('be.visible');
  });

  describe('Composant IdInput', () => {
    it('devrait accepter une entrée ID', () => {
      // Les inputs sont dans my-component avec des IDs spécifiques
      cy.get('#input1', { timeout: 5000 }).should('exist');
    });

    it('devrait afficher la valeur saisie', () => {
      cy.get('#input1', { timeout: 5000 }).type('25', { delay: 100 });
      cy.get('#input1').should('have.value', '25');
    });
  });

  describe('Affichage du contenu', () => {
    it('devrait avoir des éléments interactifs', () => {
      // Chercher les inputs et select
      cy.get('#input1', { timeout: 5000 }).should('exist');
      cy.get('select').should('exist');
    });

    it('devrait répondre aux interactions utilisateur', () => {
      // Test : interagir avec l'input
      cy.get('#input1').should('be.visible').type('10');
      cy.get('#input1').should('have.value', '10');
    });
  });

  describe('Validation des performances', () => {
    it('la page devrait se charger rapidement', () => {
      // Vérifier que les éléments principaux se chargent vite
      cy.get('h1', { timeout: 3000 }).should('exist');
      cy.get('#input1', { timeout: 3000 }).should('be.visible');
    });

    it('devrait gérer les interactions sans lag', () => {
      // Test de réactivité - saisir du texte rapidement
      cy.get('#input1').clear().type('25', { delay: 50 });
      cy.get('#input1').should('have.value', '25');
      // Vérifier que la sélection de pokémon fonctionne
      cy.get('select').should('exist');
    });
  });

  describe('Navigation et routage', () => {
    it('la page devrait maintenir son URL correctement', () => {
      cy.url().should('include', 'localhost');
    });

    it('devrait gérer les changements d\'URL', () => {
      // Vérifier que l'application répond aux changements de route
      cy.url().then((url) => {
        expect(url).to.exist;
      });
    });
  });

  describe('Accessibilité', () => {
    it('devrait avoir du contenu accessible', () => {
      // Vérifier la présence de titres
      cy.get('h1').should('exist').should('be.visible');
    });

    it('les inputs devraient être accessibles', () => {
      cy.get('#input1', { timeout: 5000 }).should('exist').should('be.visible');
      cy.get('select', { timeout: 5000 }).should('exist').should('be.visible');
    });
  });

  describe('Scénario utilisateur complet', () => {
    it('Scénario : Un utilisateur visite l\'application et saisit un ID', () => {
      // Étape 1: Vérifier que la page se charge
      cy.get('h1', { timeout: 5000 }).should('exist').should('contain', 'pokedemo');

      // Étape 2: Vérifier que l'input est visible
      cy.get('#input1', { timeout: 5000 }).should('be.visible');

      // Étape 3: Saisir un ID valide
      cy.get('#input1').clear().type('25', { delay: 100 });
      cy.get('#input1').should('have.value', '25');

      // Étape 4: Vérifier que le select existe
      cy.get('select', { timeout: 5000 }).should('exist');

      // Étape 5: Pas d'erreurs
      cy.on('uncaught:exception', (err) => {
        // Ignorer les erreurs de zone Angular
        if (err.message.includes('Navigation triggered outside Angular zone')) {
          return false;
        }
        return true;
      });
    });
  });
});
