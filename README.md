# E-commerce Back End

## Description
This project began with the goal of building upon my knowledge of back-end development by creating API routes to handle requests. The application serves as a back-end for an E-commerce site. The database stores products based on their category, and also stores a tag to describe the product. The application handles get, put, and delete requests made to the categories, products, and tags found in the database.
## Installation
Requirements to use the app:
1. Access to a command line tool
2. Node.js
3. MySQL
4. Insomnia is needed in order to test the routes

## Usage
Steps to use the app:
1. Cd into the app's main directory. Run the command 'mysql -u root -p' and enter your password.
2. Once logged into mysql, enter the command 'source db/schema.sql' to build the database.
3. Once the databse is created, enter 'quit' to exit mysql, then, run the command 'npm run seed' to seed the database.
4. Run the command 'node server.js' to start the server.
5. Now you can test the routes using insomnia.
6. The base endpoint is 'http://localhost:3001/api/'. 
7. From there, you can specify categories/, products/, or tags/ to make get and post requests to those endpoints.
6. To get only one of them, or to make put and delete requests, the endpoint will require the id as well.
8. For example, a delete request made to categories would look like: 'http://localhost:3001/api/categories/:id', with ':id' being replaced with the actual id of the category you are wanting to remove.

## Tutorial
[Click here to be directed to the walkthrough video](https://drive.google.com/file/d/1kBvuaoN1P8WT2dcyurg92s6R3Tzgv8Rb/view)
