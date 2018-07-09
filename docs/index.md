##Deliverable 1 
### Project Overview
BillsBuster is an app intended to make keeping track of bills much easier. By allowing a user to store all their billing information in one safe place, they can more easily keep an organized history. This practical app may seem simple, but being able to easily keep track of all the bills could help prevent a user from missing payments in their busy life, keep track of their money, and reduce the physical clutter needed for storing paper statements.

###Team Roles
- Lina: Database setup with MySql and Sequelize
Designing Sign up and Log in pages
Establishing user authentication with Auth0
Building Navigation for app

- John: Designing Home page
Building the pie chart to show the breakdown of bills
Design "add new bill folder" form
Populate folder in page

- Ryan: Design what the inside of a folder of a bill will look
Design how statements populate inside designated folder
Design "add statement" form
how to access camera and save as input to store in database
Schedule of Completion
June 26: Brainstorm ideas
June 28: pitch ideas and vote
June 28-July 3: make mock-ups of app, task breakdown, make trello board to keep track of tasks
July 3: Deliverable 1 due

### TRELLO Board organizer
![trello1](https://github.com/hkichen/Project3/blob/master/app/assets/github/trello1.PNG)
![trello2](https://github.com/hkichen/Project3/blob/master/app/assets/github/trello2.PNG)

### Mock Layouts
- This is the cover page layout, where a user can either sign up or log in. Signing up will add a new user in the database while logging in will go through Auth0 authentication. The sign up form will also ask for income and email.
![mockup1](https://github.com/hkichen/Project3/blob/master/app/assets/github/mockup-1.png)

- The Home Page will showcase the pie chart that breaks down the user's bills. It will also display what percent of monthly income is being spent on bills. It will be empty until they create their first folder and fill out the information. The form will prompt user for: bill/bill type name, bank/source of funds, due date,  
![mockup2](https://github.com/hkichen/Project3/blob/master/app/assets/github/mockup-2.png)

- Once inside a folder, a user can see all the statements filed under that billing type. Users can take a photo of their statement and store it in the folder. Each statement will be added to the database's Statement table, and populated in the folder as a clickable link. Once they click on the link, the can view the picture of the statment. To add a statement, the use must fill out a form, access their camera, and submit.
![mockup3](https://github.com/hkichen/Project3/blob/master/app/assets/github/mockup-3.png)

-----------------------------------------------------

