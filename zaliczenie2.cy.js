/// <reference types="cypress"/> 
beforeEach('settup',()=>{                  
    cy.viewport(1440,1080);               
    cy.visit('https://www.europegas.pl/');   
    cy.url().should('contain', 'europegas'); 
})
describe('Tests of Cookies ', ()=>{
    it('Test 1 - Accept cookie', ()=> {
        cy.get('#us-set-cookie').should('be.visible');
        cy.get('#us-set-cookie').click();
        cy.contains('Akceptuje').should('not.exist');
    });

    it('Test 2 - Check Privacy policy', ()=> {
        cy.get('.privacy-policy-link').should('be.visible');  
        cy.get('.privacy-policy-link').click();  
        cy.contains('.privacy-policy-link').should('not.exist');
    });
    
describe ('Test of Site menu', ()=>{
    it('Test 3 - Back to home', ()=> {
        cy.get('#menu-item-2123 > .w-nav-anchor > .w-nav-title').should('be.visible');
        cy.get('#menu-item-2123 > .w-nav-anchor > .w-nav-title').click();
        cy.get('.at_left > .w-image > .w-image-h > .attachment-medium').should('be.visible');  
        cy.get('.at_left > .w-image > .w-image-h > .attachment-medium').click();  
        cy.get('.at_left > .w-image > .w-image-h > .attachment-medium').should('be.visible');  
    });

    it('Test 4 - Test of Aktualności', ()=>{
        cy.get('#menu-item-2066 > .w-nav-anchor > .w-nav-title').should('be.visible');
        cy.get('#menu-item-2066 > .w-nav-anchor > .w-nav-title').click();
        cy.contains('Aktualności').should('exist');
    });

    it('Test 5 - Test of Komponenty/reduktory', ()=>{
        cy.get('#menu-item-4016 > .level_1 > .w-nav-title').should('be.visible');
        cy.get('#menu-item-4016 > .level_1 > .w-nav-title').click();
        cy.get(':nth-child(1) > :nth-child(2) > .vc_column-inner > .wpb_wrapper > .w-iconbox > .w-iconbox-meta > .w-iconbox-link > .w-iconbox-title').click();
        cy.url().should('include', 'reduktory');
    });

    it('Test 6 - Test of Komponenty/mapsensor', ()=>{
        cy.get('#menu-item-4016 > .level_1 > .w-nav-title').should('be.visible');
        cy.get('#menu-item-4016 > .level_1 > .w-nav-title').click();
        cy.get(':nth-child(1) > .vc_column-inner > .wpb_wrapper > .w-iconbox > :nth-child(1) > .w-iconbox-icon > .fas').click();
        cy.url().should('include', 'akcesoria');
        cy.wait(2000);
        cy.get('[style="position: absolute; left: 0px; top: 0px; visibility: visible; transition: none 0s ease 0s;"] > .vc_grid-item-mini > .vc_gitem-zone-c > .vc_gitem-zone-mini > .vc_gitem_row > .vc_col-sm-12 > .vc_custom_heading > p > .vc_gitem-link').click()
        cy.url().should('include', 'mapsensor');
    });

        it('Test 7 - Test of O firmie', ()=>{
        cy.get('#menu-item-2060 > .w-nav-anchor > .w-nav-title').should('be.visible');
        cy.get('#menu-item-2060 > .w-nav-anchor > .w-nav-title').click();
        cy.url().should('include', 'o-firmie');
    });

    it('Test 8 - Test of Fundusze ', ()=>{
        cy.get('#menu-item-2060 > .w-nav-anchor > .w-nav-title').should('be.visible');
        cy.get('#menu-item-2060 > .w-nav-anchor > .w-nav-title').click();
        cy.url().should('include', 'o-firmie');
        cy.scrollTo(0, 1000);
        cy.get('.post-4309 > .w-grid-item-h > .w-vwrapper > .post_title > a').click();
        cy.url().should('include', 'fundusze-europejskie');
    });
    
    it('Test 9 - Test of Dystrybutorzy', ()=>{
        cy.get('#menu-item-2123 > .w-nav-anchor > .w-nav-title').should('be.visible');
        cy.get('#menu-item-2123 > .w-nav-anchor > .w-nav-title').click();
        cy.url().should('include', 'dystrybutorzy');
        cy.contains('info@nagaz.pl').should('exist');
   });

    it('Test 10 - Test of Send Message', ()=>{
        cy.get('#menu-item-2419 > .w-nav-anchor > .w-nav-title').should('be.visible');
        cy.get('#menu-item-2419 > .w-nav-anchor > .w-nav-title').click();
        cy.scrollTo(0, 3000)
        cy.get('textarea').should('be.visible');
        cy.get('textarea').clear().type('ŻYCZĘ UDANEGO ODPOCZYNKU OD STUDENTÓW!!!!');
    });
});
});
