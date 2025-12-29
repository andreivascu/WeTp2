describe('Application PokeDemo - Tests e2e', () => {
  beforeEach(() => {
    cy.visit('/', { timeout: 10000 });
    // Attendre que l'application soit prête
    cy.get('h1', { timeout: 5000 }).should('exist');
  });

  describe('Page d\'accueil', () => {
    it('devrait charger la page d\'accueil', () => {
      cy.get('h1').should('exist').should('be.visible');
    });

    it('devrait afficher le titre pokedemo', () => {
      cy.get('h1').should('contain', 'pokedemo');
    });

    it('devrait avoir les composants principaux', () => {
      // Vérifier la présence des éléments clés
      cy.get('app-root').should('exist');
      cy.get('app-my-component', { timeout: 5000 }).should('exist');
    });
  });

  describe('Navigation et structure', () => {
    it('devrait afficher les sections principales', () => {
      // Vérifier que l'application s'est chargée correctement
      cy.get('body').should('be.visible');
      cy.get('#input1', { timeout: 5000 }).should('exist');
    });

    it('devrait être responsive', () => {
      // Test sur mobile
      cy.viewport('iphone-x');
      cy.get('h1').should('be.visible');

      // Test sur desktop
      cy.viewport(1280, 1024);
      cy.get('h1').should('be.visible');
      cy.get('#input1').should('be.visible');
    });
  });

  describe('Intégration API et affichage des données', () => {
    it('devrait charger et afficher les données sans erreurs', () => {
      // Vérifier qu'il n'y a pas d'erreurs console
      cy.on('uncaught:exception', (err) => {
        // Ignorer les erreurs liées à Angular (optionnel)
        if (err.message.includes('Navigation triggered outside Angular zone')) {
          return false;
        }
        return true;
      });
      // Vérifier que l'application s'est chargée
      cy.get('h1', { timeout: 5000 }).should('exist');
      cy.get('#input1', { timeout: 5000 }).should('exist');
    });

    it('devrait avoir un contenu fonctionnel', () => {
      // Vérifier que la page contient du contenu
      cy.get('body').should('not.be.empty');
    });
  });
});
