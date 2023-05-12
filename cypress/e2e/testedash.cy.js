describe("Acesso ao site e teste de entradas em 'Entries'", () => {
  it.skip("Testes iniciais", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:4200/");
    cy.get('[routerlink="/entry"]').click();
    cy.get(".newEntryButton > .mdc-button__label > span").click();
    cy.get("#mat-input-0").type("Lucas de Souza Resende");
    cy.get("#mat-input-1").type("05/05/2023");
    cy.get("#mat-input-2").type("1115,33");
    cy.get(".mat-mdc-select-placeholder").click();
    cy.get("#mat-option-0").click();
    cy.get("#mat-input-3").click();
    cy.get("#mat-input-3").type("Despesas diversas");
    cy.get(".confirmButton > .mdc-button__label > span").click();
  });
});

describe("Mudança de tela", () => {
  it.skip("Tela type e inserção de valores", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:4200/");
    cy.get('[routerlink="/type"]').click();
    cy.get(".mdc-button__label > span").click();
    cy.get("#mat-input-0").type("Food");
    cy.get("#mat-input-1").type("28");
    cy.get(".confirm-button > .mdc-button__label > span").click();
  });
});

describe("Voltando para o dashboard", () => {
  it("Tela type e inserção de valores", () => {
    cy.viewport(1920, 1080);
    cy.visit("http://localhost:4200/");
    cy.get(
      '[routerlink="/"] > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .center'
    ).click();
  });
});
