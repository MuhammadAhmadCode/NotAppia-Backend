# NotAppia Backend

Backend API for **NotAppia**, a simple notes application that supports user authentication and personal note management.

This server handles user registration, login, authentication, and CRUD operations for notes. Each note is linked to a specific user so that users can only access their own data.

## Features

* User registration
* User login with secure authentication
* JWT-based authentication
* Cookie-based session handling
* Create, read, update, and delete notes
* User-specific data access
* Protected API routes using middleware

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt
* cookie-parser

## API Routes

### Auth Routes

POST `/api/auth/register`
Register a new user.

POST `/api/auth/login`
Authenticate a user and generate a token.

GET `/api/auth/me`
Get the currently authenticated user.

POST `/api/auth/logout`
Log out the user by clearing the authentication cookie.

### Notes Routes

GET `/api/notes`
Get all notes for the authenticated user.

POST `/api/notes`
Create a new note.

PATCH `/api/notes/:id`
Update a note.

DELETE `/api/notes/:id`
Delete a note.

## Installation

1. Clone the repository

```
git clone https://github.com/yourusername/notappia-backend.git
```

2. Install dependencies

```
npm install
```

3. Create a `.env` file and add:

```
PORT=3000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

4. Start the server

```
npm run dev
```

The server will run on:

```
http://localhost:3000
```

## Project Purpose

This project was built as a practice full-stack application to understand authentication, protected routes, and user-specific data handling.
