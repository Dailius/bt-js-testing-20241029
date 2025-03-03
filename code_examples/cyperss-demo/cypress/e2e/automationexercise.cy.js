describe('Demo cypress functionality', () => {
    beforeEach(() => {
    // root-level hook
    // runs before every test block
        // 1. Launch browser
        // 2. Navigate to url 'http://automationexercise.com'
        cy.visit("https://automationexercise.com");
    })

    it('Test case 12 v01', () => {
        // 3. Verify that home page is visible successfully

        // 4. Click 'Products' button
        cy.contains("Products").click();

        // 5. Hover over first product and click 'Add to cart'
        // cy.get(".add-to-cart"); // 68

        cy.get(".product-overlay")
            .eq(0)
            .trigger('mouseover', { force: true })
            .find('[data-product-id]')
            .click({ force: true });

        // 6. Click 'Continue Shopping' button
        cy.contains("Continue Shopping").should("be.visible").click();

        // 7. Hover over second product and click 'Add to cart'
        cy.get(".product-overlay")
            .eq(1)
            .trigger('mouseover', { force: true })
            .find('[data-product-id]')
            .click({ force: true });

        // 8. Click 'View Cart' button
        cy.contains("View Cart").should("be.visible").click();

        // 9. Verify both products are added to Cart
        cy.get("tr[id^='product-']").should("have.length", 2);
        cy.contains('a', 'Blue Top').should('be.visible');
        cy.contains('a', 'Men Tshirt').should('be.visible');

        // 10. Verify their prices, quantity and total price
        cy.get("tr[id='product-1']").within(() => {
            cy.get(".cart_price").should("contain", "Rs. 500");
            cy.get(".cart_quantity button").should("have.text", "1");
            cy.get(".cart_total_price").should("contain", "Rs. 500");
        });
        cy.get("tr[id='product-2']").within(() => {
            cy.get(".cart_price").should("contain", "Rs. 400");
            cy.get(".cart_quantity button").should("have.text", "1");
            cy.get(".cart_total_price").should("contain", "Rs. 400");
        });
    });

    it('Test case 12 v02', () => {
        // 3. Verify that home page is visible successfully

        // 4. Click 'Products' button
        cy.contains("Products").click();

        // 5. Hover over first product and click 'Add to cart'
        // cy.get(".add-to-cart"); // 68
        cy.get("[data-product-id='1']")
            .eq(1)
            .click({ force: true });

        // 6. Click 'Continue Shopping' button
        cy.contains("Continue Shopping").should("be.visible").click();

        // 7. Hover over second product and click 'Add to cart'
        cy.get("[data-product-id='2']")
            .eq(1)
            .click({ force: true });

        // 8. Click 'View Cart' button
        cy.contains("View Cart").should("be.visible").click();

        // 9. Verify both products are added to Cart
        cy.get("tr[id^='product-']").should("have.length", 2);
        cy.contains('a', 'Blue Top').should('be.visible');
        cy.contains('a', 'Men Tshirt').should('be.visible');

        // 10. Verify their prices, quantity and total price
        cy.get("tr[id='product-1']").within(() => {
            cy.get(".cart_price").should("contain", "Rs. 500");
            cy.get(".cart_quantity button").should("have.text", "1");
            cy.get(".cart_total_price").should("contain", "Rs. 500");
        });
        cy.get("tr[id='product-2']").within(() => {
            cy.get(".cart_price").should("contain", "Rs. 400");
            cy.get(".cart_quantity button").should("have.text", "1");
            cy.get(".cart_total_price").should("contain", "Rs. 400");
        });
    });

    it("TC12.07 Verify both products are added to Cart", () => {     
        // Eiti į "Products"
        cy.contains("Products").click();
     
        // Pridėti pirmą produktą
        cy.get(".add-to-cart").eq(0).click({ force: true });
     
        // Palaukti ir spausti "Continue Shopping"
        cy.contains("Continue Shopping").should("be.visible").click();
     
        // Pridėti antrą produktą (4a preke)
        // 1div turi 2 elem (.add-to-cart)
        cy.get(".add-to-cart").eq(2).click({ force: true });
     
        // Eiti į krepšelį
        cy.contains("View Cart").should("be.visible").click();
     
        // Patikrinti, ar abu produktai yra krepšelyje
        cy.get("tr[id^='product-']").should("have.length", 2);
    })   
});