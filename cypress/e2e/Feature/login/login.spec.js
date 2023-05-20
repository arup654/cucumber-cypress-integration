
import {Given,When,And,Then} from "cypress-cucumber-preprocessor/steps";
const base_url ='http://angularjs.realworld.io/#/';

Given('user visits the homepage',function()
{
    cy.visit(`${base_url}`)

})
And('click on the Sign-in button',()=>
{
    cy.get('a[href="#/login"]').click()
})
When('enters his {string} and {string}',(usermail,passwd)=>
{
    cy.get('input[type="email"]').type(usermail)
    cy.get('input[type="password"]').type(passwd)

})
When ('enters his incorrect credentials',(table)=>
{
    table.hashes().forEach(function (row)
    {
        cy.get('input[type="email"]').type(row.usermail)
        cy.get('input[type="password"]').type(row.password)

    })
});

Then ('he should not be signed in',()=>
{
    cy.get('.ng-binding.ng-scope').contains('email or password is invalid').should('contain.text','email or password is invalid')

})


And('clicks on the sign-in button',()=>
{
    cy.get('button[type="submit"]').click()
})

Then('user should successfully login',()=>
{
    cy.get('[show-authed="true"] > .nav-link').should('be.visible')
})




