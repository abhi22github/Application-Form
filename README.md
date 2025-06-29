#Application Form
This is a simple full-stack web application for managing users.
It allows you to add, view, edit, and delete users through a React frontend and a Spring Boot backend API.

#Features
Add User: Add new users with details like name, email, and other information.

View Users: List all users with their details.

Edit User: Update existing user information.

Delete User: Remove users from the system.

Error Handling: Graceful handling of scenarios like user not found.

#🛠️ Tech Stack
Backend:

Spring Boot – REST API framework

Spring Data JPA – ORM for database operations

H2 Database – In-memory DB for development

Lombok – Reduce boilerplate code

Maven – Build tool

Frontend:

React JS – UI framework

JavaScript (ES6+)

CSS – Styling

Fetch API – For HTTP requests

#🗃️ Project Structure
Backend (Java):

FullStackBackendApplication.java – Main Spring Boot app entry point

User.java – User entity

UserController.java – REST API controller

UserRepository.java – Spring Data JPA repository

UserNotFoundException.java – Custom exception for user not found

UserNotFoundAdvice.java – Exception handler advice

Frontend (React):

Home.js – Main page listing users

AddUser.js – Form to add a new user

EditUser.js – Form to edit user details

ViewUser.js – Detailed user view

NavBar.js – Navigation bar component

App.js – Main React app entry point

index.js – React root file

App.css & index.css – Styles

#⚙️ How to Run
🚀 Backend
Ensure you have Java 17+ and Maven installed.

Navigate to the backend folder.

Run:

bash
Copy
Edit
mvn spring-boot:run
Backend runs at: http://localhost:8080

🚀 Frontend
Ensure you have Node.js installed.

Navigate to the frontend folder.

Run:

bash
Copy
Edit
npm install
npm run dev
Frontend runs at: http://localhost:3000

