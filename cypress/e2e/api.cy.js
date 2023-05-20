


const url_api= 'https://api.realworld.io/api/users/login'
const base_url ='http://angularjs.realworld.io/#/'
describe('login validation using API and bypass UI',function()
{
    it('should login with API',()=>

    {
        cy.request({ url :`${url_api}`,
                    method:'POST',
                    body:{user: {password: "tsunami", email: "arup123@mail.com"}}


                    }).its('body').then(res=>window.localStorage.setItem('jwtToken',res.user.token));

                    cy.visit(`${base_url}`)


     })



    })







