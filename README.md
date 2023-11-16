# **CypressE2EComplete**
This repository contains a comprehensive Cypress framework designed for end-to-end testing of a sample project, encompassing UI, API, and XHR testing. It demonstrates robust examples of data-driven testing using JSON files, using Mocha BDD framework, offering practical insights into managing and automating tests across various layers of a web application. 
# **Description**
This Cypress testing framework is designed to cover end-to-end testing of a sample application that includes user registration, login, note creation, editing, retrieval, and deletion. It incorporates:  
**API Testing**: Testing endpoints for user registration, login, note operations, and authentication token generation.  
**UI Testing**: Utilizing the Page Object Model to perform end-to-end UI tests from user registration to note deletion.  
**XHR Testing**: Integrated with UI testing to validate XHR (XMLHttpRequest) calls.  
Data-driven testing is achieved using JSON files for managing input and output data.  
# **Features**  
**Comprehensive Testing**: Complete end-to-end testing covering both UI and API aspects.  
**Data-Driven Approach**: Utilizing JSON files for dynamic data handling in tests.  
**Advanced Reporting**: Integration with Mochaawesome for detailed and informative test reports.  
**Efficient Test Organization**: Using the Page Object Model for maintaining and managing UI tests.  
**XHR Testing Integration**: Directly testing XHR requests alongside UI tests for real-time data validation.  
# **Pre-requistes**  
**Operating System**: Cypress is a desktop application that is installed on your computer. It supports macOS, Linux, and Windows.  
**Node.js**: Cypress is a Node.js application. Ensure you have Node.js (and npm) installed. A version of 10 or above is recommended.  
**Supported Browsers**: While Cypress can run tests in any browser installed on your machine, it's good to have Chrome, Firefox, Edge installed and updated to latest versions.  
**Development Environment**: Code editor(preferably Visual studio code).  
# **Installation**  
**Create a folder**: Create a folder in your system. Open the folder in VS or any command line tool.  
**Commands**  
npm init – After this command is ran it created package.json file in folder   
npm install cypress --save-dev : This installs the latest cypress version  
npm install cypress@12.16.0 : If you want any specific cypress version to download  
	Node modules folder is created once the cypress is installed  
npx cypress open : This open the cypress test runner and to configure framework  
# **How to run cypress tests**  
**Using cypress test runner** : npx cypress open command to open test runner. Click on each spec files and run it.   
**Using command line headless mode**: npx cypress run runs all the specs under the e2e folder one by one based on the order in that folder.   
**Using command line headless mode to run a single file**: npx cypress run --spec “filepath” runs a single file from the file path mentioned.    
**Using command line headed mode to run in specific browsers** : "npx cypress run --headed --browser <broswername> --spec ‘folder path’”  
# *Reporting**  
Mochawesome reports are used.  
Install by using the below commands:  
npm install mochawesome --save-dev  
npm install mochawesome-merge --save-dev  
npm install mochawesome-report-generator --save-dev  
# **Scripts**  
The scripts to run are given under Scripts on Package.json file(to run in test runner and Commandline in headed and non-headed).  
npm run clean-up(to clean the previous results)
npm run APICLtest(to run the API tests in CL)  
npm run UICLtest(to run the UI tests in CL)  
npm run mochawesome-merge(to generate the reports)





