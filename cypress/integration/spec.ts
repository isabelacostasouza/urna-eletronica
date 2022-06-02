describe('End-to-end tests', () => {
  it('when user enters correct tse password', () => {
    cy.visit('/')
    cy.enterTsePassword()
  })
  it('should start election', () => {
    cy.get('input').invoke('attr', 'placeholder').should('contain', 'Informe seu titulo de eleitor')
  })
  it('should enter voter data', () => {
    cy.enterFirstVoterData()
  })
  it('should enter valid senator vote', () => {
    cy.enterFirstSenatorData()
  })
  it('should enter null senator vote', () => {
    cy.enterNullVote()
  })
  it('should enter white president vote', () => {
    cy.enterNullVote()
  })
  it('voting should have ended', () => {
    cy.votingEnded()
  })
  it('when user enters correct tse password', () => {
    cy.get('button').eq(13).click()
    cy.enterTsePassword()
  })
  it('voting results should appear on screen', () => {
    cy.votingResults()
  })
})
