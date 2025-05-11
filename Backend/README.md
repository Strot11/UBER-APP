# User Registration & Login API Documentation

## Overview

This backend provides user registration and login endpoints using Node.js, Express, Mongoose, and JWT.  
Users can register with their name, email, and password. The API validates input, hashes passwords, and returns a JWT token upon successful registration or login.

---

## Endpoints

### Register

**POST** `/register`

Register a new user.

#### Request Headers

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

#### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

- `fullname.firstname` (string, required, min 3 characters)
- `fullname.lastname` (string, optional, min 3 characters if provided)
- `email` (string, required, must be a valid email)
- `password` (string, required, min 6 characters)

#### Success Response

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com",
      "socketId": null
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name should be atleast 3 characters",
        "param": "fullname.firstname",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

#### Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Internal server error"
  }
  ```

---

### Login

**POST** `/login`

Authenticate an existing user.

#### Request Headers

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

#### Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

- `email` (string, required, must be a valid email)
- `password` (string, required, min 6 characters)

#### Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "user": {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com",
      "socketId": null
    }
  }
  ```

#### Error Response

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid credentials"
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

---

## Example Requests (using curl)

### Register

```bash
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "johndoe@example.com",
  "password": "password123"
}'
```

### Login

```bash
curl -X POST http://localhost:3000/login \
-H "Content-Type: application/json" \
-d '{
  "email": "johndoe@example.com",
  "password": "password123"
}'
```

---

## Notes

- The password is never returned in the response.
- The `token` can be used for authenticated requests to other endpoints.
- Make sure your server is running and MongoDB is connected.
- Required environment variables: `JWT_SECRET`, `DB_CONNECT`

### Profile

**GET** `/users/profile`

Retrieve the profile of the currently authenticated user.

#### Request Headers

| Key           | Value                |
| ------------- | -------------------- |
| Authorization | Bearer `<jwt_token>` |

#### Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "_id": "<user_id>",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "johndoe@example.com",
    "socketId": null
  }
  ```

#### Error Response

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### Logout

**POST** `/users/logout`

Log out the currently authenticated user by blacklisting their token.

#### Request Headers

| Key           | Value                |
| ------------- | -------------------- |
| Authorization | Bearer `<jwt_token>` |

#### Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

#### Error Response

- **Status Code:** `400 Bad Request`
- **Body:**

  ```json
  {
    "message": "Token is required for logout"
  }
  ```

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

## Example Requests (using curl)

### Register

```bash
curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "johndoe@example.com",
  "password": "password123"
}'
```

### Login

```bash
curl -X POST http://localhost:3000/login \
-H "Content-Type: application/json" \
-d '{
  "email": "johndoe@example.com",
  "password": "password123"
}'
```

### Profile

```bash
curl -X GET http://localhost:3000/users/profile \
-H "Authorization: Bearer <jwt_token>"
```

### Logout

```bash
curl -X POST http://localhost:3000/users/logout \
-H "Authorization: Bearer <jwt_token>"
```

---

## Notes

- The password is never returned in the response.
- The `token` can be used for authenticated requests to other endpoints.
- Make sure your server is running and MongoDB is connected.
- Required environment variables: `JWT_SECRET`, `DB_CONNECT`

### Captain Register

**POST** `/captains/register`

Register a new captain with their details, including vehicle information.

#### Request Headers

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

#### Request Body

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

- `fullname.firstname` (string, required, min 3 characters)
- `fullname.lastname` (string, optional, min 3 characters if provided)
- `email` (string, required, must be a valid email)
- `password` (string, required, min 6 characters)
- `vehicle.color` (string, required, min 3 characters)
- `vehicle.plate` (string, required, min 3 characters)
- `vehicle.capacity` (number, required, min 1)
- `vehicle.vehicleType` (string, required, must be one of `car`, `motorcycle`, or `auto`)

#### Success Response

- **Status Code:** `201 Created`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive"
    }
  }
  ```

#### Validation Error

- **Status Code:** `400 Bad Request`
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
      // ...other errors
    ]
  }
  ```

#### Server Error

- **Status Code:** `500 Internal Server Error`
- **Body:**
  ```json
  {
    "error": "Internal server error"
  }
  ```

---

### Example Request (using curl)

```bash
curl -X POST http://localhost:3000/captains/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "johndoe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```

---

### Notes

- The password is hashed before being stored in the database.
- The `token` can be used for authenticated requests to other endpoints.
- Ensure the required environment variables (`JWT_SECRET`, `DB_CONNECT`) are properly configured.

### Captain Login

**POST** `/captains/login`

Authenticate an existing captain and return a JWT token.

#### Request Headers

| Key          | Value            |
| ------------ | ---------------- |
| Content-Type | application/json |

#### Request Body

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

- `email` (string, required, must be a valid email)
- `password` (string, required, min 6 characters)

#### Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "token": "<jwt_token>",
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive"
    }
  }
  ```

#### Error Response

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

---

### Captain Profile

**GET** `/captains/profile`

Retrieve the profile of the currently authenticated captain.

#### Request Headers

| Key           | Value                |
| ------------- | -------------------- |
| Authorization | Bearer `<jwt_token>` |

#### Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "captain": {
      "_id": "<captain_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "johndoe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive"
    }
  }
  ```

#### Error Response

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### Captain Logout

**GET** `/captains/logout`

Log out the currently authenticated captain by blacklisting their token.

#### Request Headers

| Key           | Value                |
| ------------- | -------------------- |
| Authorization | Bearer `<jwt_token>` |

#### Success Response

- **Status Code:** `200 OK`
- **Body:**
  ```json
  {
    "message": "Logout successfully"
  }
  ```

#### Error Response

- **Status Code:** `401 Unauthorized`
- **Body:**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### Example Requests (using curl)

#### Captain Login

```bash
curl -X POST http://localhost:3000/captains/login \
-H "Content-Type: application/json" \
-d '{
  "email": "johndoe@example.com",
  "password": "password123"
}'
```

#### Captain Profile

```bash
curl -X GET http://localhost:3000/captains/profile \
-H "Authorization: Bearer <jwt_token>"
```

#### Captain Logout

```bash
curl -X GET http://localhost:3000/captains/logout \
-H "Authorization: Bearer <jwt_token>"
```

---

### Notes

- The `token` is required for accessing protected endpoints like `/captains/profile` and `/captains/logout`.
- Ensure the required environment variables (`JWT_SECRET`, `DB_CONNECT`) are properly configured.
- The `token` is blacklisted during logout to prevent reuse.
