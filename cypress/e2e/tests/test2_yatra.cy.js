describe('My First Test suit', function()
{
    it('My FirstTest case', function() 
    {
        // 1st Method:- .invoke(show): Find the hidden element But need to take css element just above(nearest parent) the hidden element
        cy.visit("https://www.yatra.com/", {headers:{"Accept-Encoding": "gzip,deflate"}})
        cy.get('div.moreOption').invoke('show')
        cy.contains('Cruise').click()
        

       /* // 2nd Method:- Inspect the hidden element and use this ".click({force:true})""
        cy.visit("https://www.yatra.com/", {headers:{"Accept-Encoding": "gzip,deflate"}})
        cy.get('#booking_engine_trains > :nth-child(2)').click({force:true}) */

        /* // 3rd Method:- .trigger('mouseover)
        cy.visit("https://www.yatra.com/", {headers:{"Accept-Encoding": "gzip,deflate"}})
        cy.get('.more-arr').trigger('mouseover') */

    });
});