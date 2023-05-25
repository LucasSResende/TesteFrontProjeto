describe("Acesso ao site e teste de entradas em 'Entries'", () => {
  it("Testes iniciais de uma entrada em 'Entries'", () => {
    cy.wrap(login());
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

describe("Delete 'Entries'", () => {
  it("Testes para apagar um 'Entries'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/entry"]').click();
    cy.get(
      ":nth-child(11) > .cdk-column-action > .delete > .material-icons"
    ).click();
    cy.get(".confirmButton > .mdc-button__label > span").click();
  });
});

describe("Edit 'Entries'", () => {
  it("Teste de edição em uma entrada existente em 'Entries'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/entry"]').click();
    cy.get(
      '[title="Edit"] > .b > .back > .entry-list > .table > .mat-mdc-table > .mdc-data-table__content > :nth-child(1) > .cdk-column-action > .edit > .material-icons'
    ).click();
    cy.get("#mat-input-0").clear();
    cy.get("#mat-input-0").type("Eletric bills");
    cy.get("#mat-input-2").clear();
    cy.get("#mat-input-2").type("298.2");
    cy.get("#mat-input-3").clear();
    cy.get("#mat-input-3").type("Readjustment of values");
    cy.get(".confirmButton > .mdc-button__label > span").click();
  });
});

describe("Teste na tela de tipos de entradas", () => {
  it("Inserção de um novo 'Type'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/type"]').click();
    cy.get(".mdc-button__label > span").click();
    cy.get("#mat-input-0").type("Food");
    cy.get("#mat-input-1").type("28");
    cy.get(".confirm-button > .mdc-button__label > span").click();
  });
});

describe("Verificando valores de entrada no budget", () => {
  it("Tela budget e inserção de valores", () => {
    cy.wrap(login());
    cy.get(
      '[routerlink="/budget"] > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .center > span.grey'
    ).click();
    cy.get("#mat-input-0").type("350.0");
    cy.get("#mat-input-1").type("62.5");
    cy.get("#mat-input-2").should("have.value", "287.5");
  });
});

describe("Verificando botão de entrada rápida", () => {
  it("Pode ser de qualquer tela e deve inserir nova entrada de valores", () => {
    cy.wrap(login());
    cy.get(".container > :nth-child(1) > .mat-mdc-button-touch-target").click();
    cy.get("#mat-input-0").type("New expensive bill");
    cy.get("#mat-input-1").type("25/05/2023");
    cy.get("#mat-input-2").type("12825.3");
    cy.get(".mat-mdc-select-placeholder").click();
    cy.get("#mat-option-1").click();
    cy.get("#mat-input-3").type("New notebook aquisition");
    cy.get(".confirmButton > .mdc-button__label > span").click();
  });
});

describe("Verificando entrada de valores e valor final cálculo de 'Real Incomming", () => {
  it("Comparando cálculo final se está correto", () => {
    cy.wrap(login());
    cy.get(
      '[routerlink="/budget"] > .mdc-list-item__content > .mat-mdc-list-item-unscoped-content > .center > span.grey'
    ).click();
    cy.get("#mat-input-0").type("350.0");
    cy.get("#mat-input-1").type("62.5");
    cy.get("#mat-input-2").should("have.value", "287.5");
  });
});

function login() {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:4200/");
}
