declare namespace Cypress {
    interface Chainable<Subject = any> {
        enterTsePassword(): typeof enterTsePassword;
        enterFirstVoterData(): typeof enterFirstVoterData;
        enterFirstSenatorData(): typeof enterFirstSenatorData;
        enterNullVote(): typeof enterNullVote;
        enterWhiteVote(): typeof enterWhiteVote;
        votingEnded(): typeof votingEnded;
        votingResults(): typeof votingResults;
    }
}

function enterTsePassword(): void {
    cy.get('button').eq(0).click()
    cy.get('button').eq(1).click()
    cy.get('button').eq(2).click()
    cy.get('button').eq(3).click()
    cy.get('button').eq(4).click()
    cy.get('button').eq(14).click()
}

function enterFirstVoterData(): void {
    cy.get('button').eq(10).click()
    cy.get('button').eq(10).click()
    cy.get('button').eq(10).click()
    cy.get('button').eq(0).click()
    cy.get('button').eq(14).click()
    cy.get('button').eq(14).click()
}

function enterFirstSenatorData(): void {
    cy.get('button').eq(0).click()
    cy.get('button').eq(0).click()
    cy.get('button').eq(0).click()
    cy.get('button').eq(14).click()
    cy.get('button').eq(14).click()
}

function enterNullVote(): void {
    cy.get('button').eq(0).click()
    cy.get('button').eq(1).click()
    cy.get('button').eq(2).click()
    cy.get('button').eq(14).click()
    cy.get('button').eq(14).click()
}

function enterWhiteVote(): void {
    cy.get('button').eq(12).click()
    cy.get('button').eq(14).click()
}

function votingEnded(): void {
    cy.get('p').contains('FIM')
}

function votingResults(): void {}

Cypress.Commands.add('enterTsePassword', enterTsePassword);
Cypress.Commands.add('enterFirstVoterData', enterFirstVoterData);
Cypress.Commands.add('enterFirstSenatorData', enterFirstSenatorData);
Cypress.Commands.add('enterNullVote', enterNullVote);
Cypress.Commands.add('enterWhiteVote', enterWhiteVote);
Cypress.Commands.add('votingEnded', votingEnded);
Cypress.Commands.add('votingResults', votingResults);