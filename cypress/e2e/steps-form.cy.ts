describe("Test steps form", () => {
  it("Go to page", () => {
    cy.visit("/");
  });
  it("Validate exist form", () => {
    cy.get(`[data-cy=container-steps-form-8877]`).should("exist");
    cy.get(`[data-cy=container-steps-form-8877]`).should("be.visible");

    cy.get(`[data-cy=content-steps-form-8877]`).should("exist");
    cy.get(`[data-cy=content-steps-form-8877]`).should("be.visible");

    cy.get('[data-cy="header-steps-form-8877"]').should("exist");
    cy.get('[data-cy="header-steps-form-8877"]').should("be.visible");
    cy.get('[data-cy="header-steps-form-8877"] > h1').should(
      "have.text",
      "Formulario de registro"
    );

    cy.get('[data-cy="footer-steps-form-8877"]').should("exist");
    cy.get('[data-cy="footer-steps-form-8877"]').should("be.visible");
  });

  it("Step one", () => {
    cy.get("#full_name").focus().wait(100).blur();
    cy.get("#email").focus().wait(100).blur();
    cy.get("#phone_number").focus().wait(100).blur();

    cy.get("#full_name").type("Wilfreo Medina");
    cy.get("#email").type("test@gmail.com");
    cy.get("#phone_number").type("999999999");
    cy.get("#phone_number").focus().wait(100).blur();

    cy.get('[data-cy="button-next-action-4455"]').click();
  });

  it("Step two", () => {
    cy.get("#street_address").focus().wait(100).blur();
    cy.get("#city").focus().wait(100).blur();
    cy.get("#postal_code").focus().wait(100).blur();
    cy.get("#country").focus().wait(100).blur();

    cy.get("#street_address").type("Calle mellado");
    cy.get("#city").type("Caracas");
    cy.get("#postal_code").type("2301");
    cy.get("#country").select("Venezuela");

    cy.get('[data-cy="button-next-action-4455"]').click();
  });

  it("Step three", () => {
    cy.get("#username").focus().wait(100).blur();
    cy.get("#password").focus().wait(100).blur();
    cy.get("#confirm_password").focus().wait(100).blur();
    cy.get("#profile_type_Personal").focus().wait(100).blur();

    cy.get("#username").type("test");
    cy.get("#password").type("Test23..");
    cy.get("#confirm_password").type("Test23..");
    cy.get("#profile_type_Business").click();

    cy.get('[data-cy="button-next-action-4455"]').click();
  });

  it("Step four b", () => {
    cy.get("#company_name").focus().wait(100).blur();
    cy.get("#company_size").focus().wait(100).blur();
    cy.get("#role_in_company").focus().wait(100).blur();

    cy.get("#company_name").type("Monoma");
    cy.get("#company_size").select("1-10");
    cy.get("#role_in_company").type("Programador");

    cy.get('[data-cy="button-next-action-4455"]').click();
  });

  it("Step five", () => {
    cy.get("#notifications").click();
    cy.get("#how_heard_FriendReferral").click();
    cy.get("#terms_agreed").click();

    cy.get('[data-cy="button-next-action-4455"]').click();
    cy.wait(3000);
  });

  it("Modal confirm", () => {
    cy.get(`[data-cy=modal-confirm-7744]`).should("exist");
    cy.get(`[data-cy=modal-confirm-7744]`).should("be.visible");
    cy.get('[data-cy="button-accept-modal-confirm-4455"]').click();
  });

  it("Page summary", () => {
    cy.get(`[data-cy=content-summary-4455]`).should("exist");
    cy.get(`[data-cy=content-summary-4455]`).should("be.visible");
  });
});
