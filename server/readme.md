# Horizon-Minds Server

This directory contains the server-side code for the Horizon-Minds platform, an online learning platform providing topic-wise video courses accessible through user subscriptions.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [License](#license)

## Introduction

The server application for Horizon-Minds is built to handle the backend logic, database operations, and API endpoints for the platform.

## Features

- **User Authentication**: JWT-based authentication for secure user sessions.
- **Course Management**: API endpoints for managing video courses and user subscriptions.
- **Database Integration**: Seamless integration with a database for storing user and course data.
- **RESTful API**: Well-structured RESTful API for client-server communication.

## Tech Stack

- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing data.
- **JWT**: JSON Web Tokens for authentication.
- **Mongoose**: ODM for MongoDB and Node.js.

## Installation

To set up the server application locally, follow these steps:

1. **Navigate to the server directory**:
    ```sh
    cd server
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3.3. **Set up environment variables**: Create a `.env` file in the `server` directory and add the necessary environment variables.
    ```env
    PORT=5000
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```
  

4. **Run the server**:
    ```sh
    npm start
    ```

## Usage

After running the server, you can access the API at `http://localhost:5000`.

## API Documentation

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in an existing user.

### Courses

- **GET /api/courses**: Get a list of all courses.
- **POST /api/courses**: Create a new course (Admin only).
- **GET /api/courses/:id**: Get details of a specific course.
- **PUT /api/courses/:id**: Update a course (Admin only).
- **DELETE /api/courses/:id**: Delete a course (Admin only).


## License

This project is licensed under the MIT License. See the [LICENSE](../LICENSE) file for more details.
