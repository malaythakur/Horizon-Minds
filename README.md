# Horizon-Minds

An online learning platform providing topic-wise video courses accessible through user subscriptions.

## Project Overview

Horizon-Minds is an online learning platform that offers topic-wise video courses. Users can subscribe to various courses and access high-quality educational content.

## Tech Stacks

**Frontend:**
- React
- Tailwind CSS

**Backend:**
- Node.js
- Express.js

**Database:**
- AWS RDS (MySQL)

**Authentication:**
- JWT

**Payments:**
- Stripe

**Video Hosting:**
- Vimeo API

## Environment Setup

To set up the environment, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/malaythakur/Horizon-Minds.git
    cd Horizon-Minds
    ```

2. **Install dependencies for the backend**:
    ```sh
    cd server
    npm install
    ```

3. **Install dependencies for the frontend**:
    ```sh
    cd ../client
    npm install
    ```

4. **Set up environment variables**:
    Create a `.env` file in the root directory and provide the necessary environment variables. Refer to the `dotenv` file for the required variables, including AWS RDS details, Stripe keys, JWT secret, and Vimeo API keys.

## Installation Instructions

### Step-by-step guide to set up the project locally:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/malaythakur/Horizon-Minds.git
    cd Horizon-Minds
    ```

2. **Install dependencies for the backend**:
    ```sh
    cd server
    npm install
    ```

3. **Install dependencies for the frontend**:
    ```sh
    cd ../client
    npm install
    ```

4. **Run the backend and frontend servers**:
    - **Backend**: 
        ```sh
        cd server
        npm run server
        ```
    - **Frontend**:
      (in new terminal)
        ```sh
        cd ../client
        npm start
        ```

## Key Features

- **User Authentication**: JWT-based login and registration.
- **Course Purchase and Subscription**: Users can purchase and subscribe to various courses.
- **Course Video Player**: Integrated video player for course content.
- **Secure Payment Integration**: Stripe is used for handling payments securely.

## Contributing Guidelines

To contribute to the project, follow these steps:

1. Fork the repository.
2. Create a feature branch:
    ```sh
    git checkout -b feature-name
    ```
3. Make changes and commit:
    ```sh
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```sh
    git push origin feature-name
    ```
5. Open a pull request with proper details.
