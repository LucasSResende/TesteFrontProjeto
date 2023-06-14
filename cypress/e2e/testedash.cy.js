describe("Acesso ao site", () => {
  it("Teste na tela de 'New type'", () => {
    cy.wrap(login());
  });
});

describe("Acesso ao site e teste de criação de 'New type'", () => {
  it("Teste na tela de 'New type'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/type"]').click();
    cy.get(".mdc-button__label > span").click();
    cy.get("#mat-input-0").type("teste");
    cy.get("#mat-input-1").type("21");
    cy.get(".confirm-button > .mdc-button__label > span").click();

    cy.get('[routerlink="/type"]').click();
    cy.get(".mdc-button__label > span").click();
    cy.get("#mat-input-0").type("basic");
    cy.get("#mat-input-1").type("35");
    cy.get(".confirm-button > .mdc-button__label > span").click();

    cy.get('[routerlink="/type"]').click();
    cy.get(".mdc-button__label > span").click();
    cy.get("#mat-input-0").type("Food");
    cy.get("#mat-input-1").type("28");
    cy.get(".confirm-button > .mdc-button__label > span").click();
  });
});

describe("Criar um 'New Entry'", () => {
  it("Testes para criar um 'Entry' do novo tipo 'teste'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/entry"]').click();
    cy.get(".newEntryButton > .mdc-button__label > span").click();
    cy.get("#mat-input-0").type("Water bill");
    cy.get("#mat-input-1").type("06/16/2023");
    cy.get("#mat-input-2").click();
    cy.get("#mat-input-2").type("110.15");
    cy.get("svg.ng-tns-c55-6 > .ng-tns-c55-6").click();
    cy.get("#mat-option-1").click();
    cy.get("#mat-input-3").type("Basic water bill");
    cy.get(".confirmButton > .mdc-button__label > span").click();
    cy.wait(1000);
    cy.get('[routerlink="/entry"]').click();
    cy.get(".newEntryButton > .mdc-button__label > span").click();
    cy.get("#mat-input-0").type("Tool kit");
    cy.get("#mat-input-1").type("06/28/2023");
    cy.get("#mat-input-2").type("1062.15");
    cy.get("svg.ng-tns-c55-6 > .ng-tns-c55-6").click();
    cy.get("#mat-option-0").click();
    cy.get("#mat-input-3").type("Working tool kit");
    cy.get(".confirmButton > .mdc-button__label > span").click();
    cy.wait(1000);
    cy.get('[routerlink="/entry"]').click();
    cy.get(".newEntryButton > .mdc-button__label > span").click();
    cy.get("#mat-input-0").type("Supermarket");
    cy.get("#mat-input-1").type("06/15/2023");
    cy.get("#mat-input-2").type("250.30");
    cy.get("svg.ng-tns-c55-6 > .ng-tns-c55-6").click();
    cy.get("#mat-option-1").click();
    cy.get("#mat-input-3").type("monthly supermarket");
    cy.get(".confirmButton > .mdc-button__label > span").click();
  });
});

describe("Teste na tela de tipos de entradas", () => {
  it("Delete de 'Type', só pode ser feito quando deleta todas suas 'Entries'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/entry"]').click();
    cy.get(
      ":nth-child(1) > .cdk-column-action > .delete > .material-icons"
    ).click();
    cy.get(".confirmButton > .mdc-button__label > span").click();

    cy.wrap(login());
    cy.get('[routerlink="/type"]').click();
    cy.get(
      ":nth-child(3) > .cdk-column-action > .delete > .material-icons"
    ).click();
    cy.get(".confirm-button > .mdc-button__label > span").click();
  });
});

describe("Verificando valores de entrada no budget", () => {
  it("Tela budget e inserção de valores", () => {
    cy.wrap(login());
    cy.get(
      '[routerlink="/budget"] > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .center > span.grey'
    ).click();
    cy.get("#mat-input-0").clear();
    cy.get("#mat-input-0").type("350.21");
    cy.get("#mat-input-1").clear();
    cy.get("#mat-input-1").type("62.50");
    cy.get("#mat-input-2").should("have.value", "287.71");
  });
});

describe("Verificando botão de entrada rápida", () => {
  it("Pode ser de qualquer tela e deve inserir nova entrada de valores", () => {
    cy.wrap(login());
    cy.get(":nth-child(1) > .mat-mdc-button-touch-target").click();
    cy.get("#mat-input-0").type("New expensive bill");
    cy.get("#mat-input-1").type("05/28/2023");
    cy.get("#mat-input-2").type("12825.30");
    cy.get(".mat-mdc-select-placeholder").click();
    cy.get("#mat-option-0").click();
    cy.get("#mat-input-3").type("New notebook aquisition");
    cy.get(".confirmButton > .mdc-button__label > span").click();
  });
});

describe("Edit 'Entries'", () => {
  it("Teste de edição em uma entrada existente em 'Entries'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/entry"]').click();
    cy.get(
      ":nth-child(1) > .cdk-column-action > .edit > .material-icons"
    ).click();
    cy.get("#mat-input-0").clear();
    cy.get("#mat-input-0").type("Tool kit 1");
    cy.get("#mat-input-2").clear();
    cy.get("#mat-input-2").type("135.25");
    cy.get("#mat-input-3").clear();
    cy.get("#mat-input-3").type("Real values");
    cy.get(".confirmButton > .mdc-button__label > span").click();
    cy.wrap(login());
  });
});

describe("Edição de 'Types'", () => {
  it("Teste na tela de 'Types'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/type"]').click();
    cy.get(
      ":nth-child(2) > .cdk-column-action > .edit > .material-icons"
    ).click();
    cy.get("#mat-input-0").clear();
    cy.get("#mat-input-0").type("Basic");
    cy.get("#mat-input-1").clear();
    cy.get("#mat-input-1").type("40");
    cy.get(".confirm-button > .mdc-button__label > span").click();
    cy.wrap(login());
  });
});

describe.skip("Error 'Entries'", () => {
  it("Teste de edição em uma entrada existente em 'Entries'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/entry"]').click();
    cy.get(
      ":nth-child(1) > .cdk-column-action > .edit > .material-icons"
    ).click();
    cy.get("#mat-input-0").clear();
    cy.get("#mat-input-0").type("Tool kit 1");
    cy.get("#mat-input-2").clear();
    cy.get("#mat-input-2").type("135.25");
    cy.get("#mat-input-3").clear();
    cy.get("#mat-input-3").type("Real values");
    cy.get(".confirmButton > .mdc-button__label > span").click();
    cy.wrap(login());
  });
});

//cy.get('.mat-mdc-simple-snack-bar > .mat-mdc-snack-bar-label').should('have.text', 'Ocorreu um erro!');

function login() {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:4200/");
}
