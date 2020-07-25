# zebra-nightwatch

## Install nightwatchjs
* git init 
    * To Initilize empty Git repository in the folder
* npm init -y
    * To create default package.json file
* npm install nightwatch --save-dev
    * Will create devDependencies
    * Will create the node_modules folder
* npm install chromedriver --save-dev

### To run homepageVerification file individually
* npm test -- --tag homeVerification

### To run autoWorkflow file individually
* npm test -- --tag autoWorkflow

### To run all tests
* npm test