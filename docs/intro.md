---
sidebar_position: 1
---

# Project Intro

This project was about developing a tool which facilitates the creation of custom quizzes using a modular drag and drop approach. These quizzes allow for dynamic generation based on answers to previous questions, instead of the traditional static question approach.


## Getting Started

The project uses Spring Boot as its processing backend, Remix with React and Tailwind as its front end and Mongo DB as its database.



### What you'll need

- [Node.js](https://nodejs.org/en/download/):
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.
- Java 21

### Recommendations
It is recommended that you use some kind of container environment to run the system. Since you will need to run the MongoDB (or SSH to database), spring boot application and the remix frontend. So a container enviroment can allow for all these to be run from one button instead of many.

### System login
I have opted for Microsoft login for the frontend as this allows us to restrict the people who can access the system to our organisation and also it means we are not handling passwords. However, you may wish to approach the login differently and to do so it is recommended to use another oauth system. Remix has plugins which can make other types of authentication easier.

If you have opted for Microsoft login and are at the University of Strathclyde, you can email computer IT support for access to the Microsoft login system.

### .env file
Before running the system the frontend and backend requires a .env file which contains all of the information the system requires. 

The front end .env should contain:
```txt
MONGO_HOST= e.g: localhost
MONGO_PORT= e.g: 27017
MONGO_DATABASE= e.g the database name: xbb12345
MONGO_USERNAME= e.g the mongo db username: johnDoe
MONGO_PASSWORD= e.g the mongo db password: 123456
MONGO_AUTH_DB= e.g: the auth type, admin maybe

JWT_SECRET= This is used between the remix server and spring boot to verify each other. It must be the same in both the envs!
NODE_ENV= the type of stage, i.e: development

; If you are using Microsoft Login
MICROSOFT_CLIENT_ID= e.g: Microsoft client id
MICROSOFT_CLIENT_SECRET= e.g: Microsoft client secret
MICROSOFT_TENANT_ID= this is the organisations id - this makes sure that only members of the paricular organisation can login

; If you are using form on main page then you may want to set these up
VITE_CONSENT_FORM_URL= The url of the consent form
VITE_PIS_FORM_URL= The url of the Participant Information Sheet
VITE_DOCUMENTATION_URL= The url of the documentation of the system
```

The backend .env should contain:
```txt
MONGO_HOST= e.g: localhost
MONGO_PORT= e.g: 27017
MONGO_DATABASE= e.g the database name: xbb12345
MONGO_USERNAME= e.g the mongo db username: johnDoe
MONGO_PASSWORD= e.g the mongo db password: 123456
MONGO_AUTH_DB= e.g: the auth type, admin maybe

JWT_SECRET= This is used between the remix server and spring boot to verify each other. It must be the same in both the envs!
SERVER_PORT= The port that the spring server should run on e.g: 8080
```

### Running the system
Before running the system make sure the .env files are set up correctly for both the frontend and backend, as described above.

Firstly for the MongoDB database, you could run the database locally or for development at University of Strathclyde you can SSH into the MongoDB server, please see their documentation on this [Strathclyde MongoDB](https://docs.cis.strath.ac.uk/devweb/mongodb/).

After having MongoDB running then you can start the backend. Make sure that you have installed the Maven dependencies. Then build and run the Spring Boot application. In [IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea/download/) there is should be run button which can make this process easier.

Now we are onto the Remix Server. The remix server runs as a sort of backend and frontend at the same time - which is a benefit and a negative. Anyway make sure you have installed all the modules by running:
```bash
npm install
```

Then to run the application, do:
```bash
npm run dev
```

All of this should have the application running on your localhost with the Spring Boot running on a different port than the Remix server. By going to the Remix servers port it recommends you should now see the application.

### Other Information
You should not be required to edit the main front end server as this has been designed to allow for the communication. However, if you feel you have to, there is no one stopping you. The only thing that you should be editing if you are making a module is your own webpage for the module question and the module which will be in Spring Boot.
