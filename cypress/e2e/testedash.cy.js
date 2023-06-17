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
    cy.get("#mat-input-1").type("15");
    cy.get(".confirm-button > .mdc-button__label > span").click();
    cy.wait(1000);
    cy.get('[routerlink="/type"]').click();
    cy.get(".mdc-button__label > span").click();
    cy.get("#mat-input-0").type("basic");
    cy.get("#mat-input-1").type("20");
    cy.get(".confirm-button > .mdc-button__label > span").click();
    cy.wait(1000);
    cy.get('[routerlink="/type"]').click();
    cy.get(".mdc-button__label > span").click();
    cy.get("#mat-input-0").type("Laisure");
    cy.get("#mat-input-1").type("39");
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
    cy.wait(1000);
    cy.get('[routerlink="/entry"]').click();
    cy.get(".newEntryButton > .mdc-button__label > span").click();
    cy.get("#mat-input-0").type("Viagem litoral");
    cy.get("#mat-input-1").type("07/10/2023");
    cy.get("#mat-input-2").type("3280,00");
    cy.get("svg.ng-tns-c55-6 > .ng-tns-c55-6").click();
    cy.get("#mat-option-1").click();
    cy.get("#mat-input-3").type("Vacation's Travel");
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
      ":nth-child(2) > .cdk-column-action > .delete > .material-icons"
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
      ":nth-child(2) > .cdk-column-action > .edit > .material-icons"
    ).click();
    cy.get("#mat-input-0").clear();
    cy.get("#mat-input-0").type("Tool kit");
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
    cy.get("#mat-input-1").clear();
    cy.get("#mat-input-1").type("22");
    cy.get(".confirm-button > .mdc-button__label > span").click();
    cy.wrap(login());
  });
});

describe("Edição de 'Entries'", () => {
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
    cy.get("#mat-input-3").type("Price increase");
    cy.get(".confirmButton > .mdc-button__label > span").click();
  });
});

describe("Teste tela 'Entries'", () => {
  it("Testes de asserts quanto aos campos 'Name', 'Date', 'Value', 'Classification' e 'Description'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/entry"]').click();
    cy.get(
      ".mdc-data-table__content > :nth-child(1) > .cdk-column-name"
    ).should("have.text", "New expensive bill");
    cy.wait(1000);
    cy.get('[routerlink="/entry"]').click();
    cy.get(":nth-child(2) > .cdk-column-date").should(
      "have.text",
      "15/06/2023"
    );
    cy.wait(1000);
    cy.get('[routerlink="/entry"]').click();
    cy.get(":nth-child(3) > .cdk-column-value").should(
      "contain.text",
      "135,25"
    );

    cy.get('[routerlink="/entry"]').click();
    cy.get(":nth-child(2) > .cdk-column-classification").should(
      "have.text",
      "basic"
    );
    cy.wait(1000);
    cy.get('[routerlink="/entry"]').click();
    cy.get(
      ".mdc-data-table__content > :nth-child(1) > .cdk-column-description"
    ).should("have.text", "New notebook aquisition");
  });
});

describe("Teste tela 'Types'", () => {
  it("Testes de asserts quanto aos campos 'Name' e 'Portion'", () => {
    cy.wrap(login());
    cy.get('[routerlink="/type"]').click();
    cy.get(
      ".mdc-data-table__content > :nth-child(1) > .cdk-column-name"
    ).should("have.text", "teste");
    cy.wait(1000);
    cy.get('[routerlink="/type"]').click();
    cy.get(":nth-child(2) > .cdk-column-portion").should("have.text", "39%");
  });
});

function login() {
  cy.viewport(1920, 1080);
  cy.visit("http://localhost:4200/");
}
