//class in JS

class page{
  constructor(){
    //common methods here

  }
//resuable methods
//getter  method
typeEmail(email){
    cy.get('locator').type(email)
    return email
}

clickLogin(){
    cy.get('locator').click()
}

}
export default page

/*
Now if you want to create a login page test case, suppose login.js
there first create the class object
object creation
const pageLogin = new page();


*/
class BasePage {
    constructor() {
        // Properties common to all pages
        this.header = this.getElement('#header');
        this.footer = this.getElement('#footer');
        this.sidebar = this.getElement('#sidebar');
    }
    getElement(selector) {
        // A hypothetical method to retrieve an element
        return document.querySelector(selector);
    }
    navigate(url) {
        // Navigate to a URL
        window.location.href = url;
    }
}

class LoginPage extends BasePage {
    constructor() {
        super();  // Call the parent class constructor
        this.usernameField = this.getElement('#username');
        this.passwordField = this.getElement('#password');
        this.loginButton = this.getElement('#loginButton');
    }
    login(username, password) {
        this.usernameField.value = username;
        this.passwordField.value = password;
        this.loginButton.click();
    }
}

class DashboardPage extends BasePage {
    constructor() {
        super();  // Call the parent class constructor
        this.welcomeMessage = this.getElement('#welcomeMessage');
        this.logoutButton = this.getElement('#logoutButton');
    }

    logout() {
        this.logoutButton.click();
    }
}

