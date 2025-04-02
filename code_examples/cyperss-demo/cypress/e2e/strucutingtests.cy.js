

describe('TS01 test scenario', () => {
    it('TC01.01 Load page examplw.cyperss.io', () => {
        cy.visit('https://example.cypress.io')
        cy.contains("h1","Kitchen Sink").should('be.visible')
    })

    it('TC01.02 some test name', () => {
        cy.log("TC01.02 some test name");
    })

    it('TC01.03 some test name', () => {
        cy.log("TC01.03 some test name");
    })
})


describe('TS02 test scenario', () => {
    it('TC02.01 Load page examplw.cyperss.io', () => {
        cy.visit('https://example.cypress.io')
        cy.contains("h1","Kitchen Sink").should('be.visible')
    })

    it('TC02.02 some test name', () => {
        cy.log("TC02.02 some test name");
    })

    it('TC02.03 some test name', () => {
        cy.log("TC02.03 some test name");
    })
})


describe('TS03 test scenario / test case', () => {
    describe('TS03.1 test scenario / test case', () => {
        it('TC03.01.01 Load page examplw.cyperss.io', () => {
            cy.log("TC03.01.01 some test name");
        })
    
        it('TC03.01.02 some test name', () => {
            cy.log("TC03.01.02 some test name");
        })
    
        it('TC03.01.03 some test name', () => {
            cy.log("TC03.01.02 some test name");
        })
    })

    describe('TS03.2 test scenario / test case', () => {
        it('TC03.02.01 Load page examplw.cyperss.io', () => {
            cy.log("TC03.02.01 some test name");
        })
    
        it('TC03.02.02 some test name', () => {
            cy.log("TC03.02.02 some test name");
        })
    
        it('TC03.02.03 some test name', () => {
            cy.log("TC03.02.02 some test name");
        })
    })
})


describe('TS02 Header', () => {
    describe('TS02 Navigation menu from Home page', () => {
        beforeEach(() => {
                cy.visit("https://sweetshop.netlify.app/");
            })

        it('TC_02.01 Test open Sweets page', () => {
            cy.log("TC_02.01 Test open Sweets page");
        })

        it('TC_02.02 Test open About page', () => {
            cy.log("TC_02.02 Test open About page");
        })

        it('TC_02.03 Test open Login page', () => {
            cy.log("TC_02.03 Test open Login page");
        })

        it('TC_02.04 Test open Basket page', () => {
            cy.log("TC_02.04 Test open Basket page");
        })  
    })

    describe('TS02 Navigation menu from Sweets page', () => {
        beforeEach(() => {
                cy.visit("https://sweetshop.netlify.app/about");
            })

        it('TC_02.01 Test open Sweets page', () => {
            cy.log("TC_02.01 Test open Sweets page");
        })

        it('TC_02.02 Test open About page', () => {
            cy.log("TC_02.02 Test open About page");
        })

        it('TC_02.03 Test open Login page', () => {
            cy.log("TC_02.03 Test open Login page");
        })

        it('TC_02.04 Test open Basket page', () => {
            cy.log("TC_02.04 Test open Basket page");
        })  
    })

    describe('TS02 Navigation menu from About page', () => {
        beforeEach(() => {
                cy.visit("https://sweetshop.netlify.app/sweets");
            })

        it('TC_02.01 Test open Sweets page', () => {
            cy.log("TC_02.01 Test open Sweets page");
        })

        it('TC_02.02 Test open About page', () => {
            cy.log("TC_02.02 Test open About page");
        })

        it('TC_02.03 Test open Login page', () => {
            cy.log("TC_02.03 Test open Login page");
        })

        it('TC_02.04 Test open Basket page', () => {
            cy.log("TC_02.04 Test open Basket page");
        })  
    })

    describe('TS02 Navigation menu from Login page', () => {
        beforeEach(() => {
                cy.visit("https://sweetshop.netlify.app/sweets");
            })

        it('TC_02.01 Test open Sweets page', () => {
            cy.log("TC_02.01 Test open Sweets page");
        })

        it('TC_02.02 Test open About page', () => {
            cy.log("TC_02.02 Test open About page");
        })

        it('TC_02.03 Test open Login page', () => {
            cy.log("TC_02.03 Test open Login page");
        })

        it('TC_02.04 Test open Basket page', () => {
            cy.log("TC_02.04 Test open Basket page");
        })  
    })

    describe('TS02 Navigation menu from Basket page', () => {
        beforeEach(() => {
                cy.visit("https://sweetshop.netlify.app/sweets");
            })

        it('TC_02.01 Test open Sweets page', () => {
            cy.log("TC_02.01 Test open Sweets page");
        })

        it('TC_02.02 Test open About page', () => {
            cy.log("TC_02.02 Test open About page");
        })

        it('TC_02.03 Test open Login page', () => {
            cy.log("TC_02.03 Test open Login page");
        })

        it('TC_02.04 Test open Basket page', () => {
            cy.log("TC_02.04 Test open Basket page");
        })  
    })
})