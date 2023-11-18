describe("Landing Page to Hospitals Page Test", () => {
  it("passes", () => {
    // Go to landing page
    cy.visit("http://localhost:3000");
    // Wait for the page to load, shouldn't take more than 5 seconds... right?
    cy.wait(5000);
    // Check for the video element
    cy.get("video").should("exist");
    // Check if the video is playing
    cy.get("video").its("0.paused").should("equal", false);
    // Wait 5 seconds
    cy.wait(5000);
    // Press the Pause Button
    cy.contains("Pause").click();
    // Check if video is paused
    cy.get("video").its("0.paused").should("equal", true);
    // Navigate to /hospital page via button
    cy.contains("Select Your Vaccine NOW").click();
    // Check if user is navigated
    cy.url().should("include", "/hospital");
    // Wait 2 seconds
    cy.wait(2000);
    // Check if there are at least 3 images
    cy.get('img').should('have.length.at.least', 3);
  });
});
