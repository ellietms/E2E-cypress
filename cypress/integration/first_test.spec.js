describe("Heading test", () => {
  //actual test starts
  it("contains the correct title", () => {
    //go to this page
    cy.visit("http://localhost:3000/example-1");
    // get the h1 in the example one
    cy.get("h1")
      //get the inner text of h1
      .invoke("text")
      //check the inner text is equal to the "My A..."
      .should("equal", "My Awesome Web Application");
  });
});
