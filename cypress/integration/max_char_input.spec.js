describe("Text box with max characters" , () => {
    // Define the test
    it("displays the appropriate remaining characters count" , ( () => {
        cy.visit("http://localhost:3000/example-2")
        cy.get("span")
            .invoke("text")
            .cy.should("equal",'15');

    })
})