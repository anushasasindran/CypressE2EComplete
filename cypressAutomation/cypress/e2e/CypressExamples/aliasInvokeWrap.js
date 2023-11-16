describe('Alias Invoke and Warp', () => {
   let body ={
      email:"sasindran.anusha@gmail.com",
      password:"test123"
    }
 
//Invoke val gives the selected one
		
it('invoke text method to capture text',() =>{
   cy.visit('https://practice.expandtesting.com/notes/app/login')
   const email = body.email
   const password = body.password
   cy.login(email,password)
    cy.get('[data-testid="home"]').invoke('text').then((text) => {
     cy.log(text)
     expect(text).to.contain('MyNotes');  
    });
 })

 it('should use Invoke and alias to capture text',() =>{
   cy.visit('https://practice.expandtesting.com/notes/app/login')
        const email = body.email
        const password = body.password
        cy.login(email,password)
     cy.get('[data-testid="home"]').as('notesText')
     cy.get('@notesText').invoke('text').then((text) => {
      cy.log(text)
      expect(text).to.contain('MyNotes');  
     });
  })
  
    it('should use Invoke val method',() =>{
      cy.visit('https://practice.expandtesting.com/notes/app/login')
      const email = body.email
      const password = body.password
      cy.login(email,password)
     cy.get('[data-testid=add-new-note]').click()
     cy.get('[data-testid="note-category"]').as('noteCategory')
     //Invoke val Retrieving the value of form elements, such as input, select, etc
     //If we use invoke text here we get as three categories HomeWorkPersonal
     //Invoke val gives the selected one
     cy.get('@noteCategory').invoke('val').then((val) => {
      cy.log(val)
      expect(val).to.equal('Home');  
     });
  })
  //if we are not using wrap method gets an error that categories.each is not a function.
     //by using warp, we allows non cypress command to be used in cypress to allow with the cypress actions
       it.only('should use Wrap command to make it to a cypress command',() =>{
         cy.visit('https://practice.expandtesting.com/notes/app/login')
        const email = body.email
        const password = body.password
        cy.login(email,password)
     const categories = ['home', 'work', 'personal']
     cy.wrap(categories).each((categories) => {
     cy.get(`[data-testid="category-${categories}"]`).click()

     })
  })
})