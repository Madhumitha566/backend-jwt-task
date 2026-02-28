# 🛡️ Node.js Authentication & Authorization System

A robust backend API demonstrating secure User Authentication and Authorization using **Node.js**, **Express.js**, and **Mongoose**. This project utilizes **JSON Web Tokens (JWT)** with the **Bearer Token** strategy to manage user sessions.

## 🏗️ Architecture: MVC Pattern
The project follows the **Model-View-Controller** design pattern to ensure clean code and scalability:
- **Models**: Defines the data structure and business logic (Mongoose).
- **Controllers**: Handles the request logic and interacts with the models.
- **Routes**: Defines the API endpoints.
- **Middlewares**: Handles authorization "gatekeeping" logic.

---

## 🛠️ Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Security**: 
  - `bcryptjs` (Password hashing)
  - `jsonwebtoken` (Bearer Token generation and verification)
- **Testing**: Postman

---

## 🚦 API Endpoints

### 1. Register User
* **Endpoint**: `POST /api/auth/register`
* **Description**: Creates a new user in the database.
* **Request Body**:
    ```json
    {
      "username": "coder_alex",
      "email": "alex@example.com",
      "password": "strongPassword123"
    }
    ```
* **Security**: Passwords are automatically salted and hashed before storage.

### 2. Login User
* **Endpoint**: `POST /api/auth/login`
* **Description**: Authenticates user and returns a token.
* **Request Body**:
    ```json
    {
      "email": "alex@example.com",
      "password": "strongPassword123"
    }
    ```
* **Response**: 
    ```json
    {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ..."
    }
    ```

### 3. Get Profile (Protected)
* **Endpoint**: `GET /api/auth/profile`
* **Description**: Retrieves the logged-in user's data.
* **Requirement**: Requires a valid JWT in the Authorization header.
* **Header**: `Authorization: Bearer <token>`



---

## 🔒 Security Features
1.  **Password Hashing**: Uses a `pre-save` hook in Mongoose to hash passwords using `bcryptjs`.
2.  **JWT Verification**: Custom middleware checks the `Authorization` header for a valid Bearer token.
3.  **Data Projection**: Uses `.select('-password')` to ensure sensitive data is never sent to the client.
4.  **Route Protection**: Only users with a valid token can access the `/profile` route.

---


