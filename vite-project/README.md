# Uber App Frontend Documentation

## Overview

This is the frontend for the Uber-like application, built using React. It includes pages for user and captain registration, login, and a home page. Below are the details of the key components and their functionality.

---

## Components

### **Home Page**

**File:** `src/pages/home.jsx`

- The home page serves as the entry point for the application.
- It displays a welcome message and a "Continue" button that redirects users to the login page.

#### Key Features:

- Background image with Uber branding.
- A button to navigate to the login page.

---

### **User Signup**

**File:** `src/pages/UserSignup.jsx`

- This page allows users to register by providing their first name, last name, email, and password.

#### Key Features:

- Form fields for:
  - First Name
  - Last Name
  - Email
  - Password
- On form submission:
  - The user data is stored in the `userData` state.
  - The form fields are cleared.

#### Example State:

```json
{
  "fullName": {
    "FirstName": "John",
    "LastName": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

---

### **User Login**

**File:** `src/pages/UserLogin.jsx`

- This page allows users to log in by providing their email and password.

#### Key Features:

- Form fields for:
  - Email
  - Password
- On form submission:
  - The login data is stored in the `userData` state.
  - The form fields are cleared.

#### Example State:

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

---

### **Captain Signup**

**File:** `src/pages/CaptainSignup.jsx`

- This page allows captains to register by providing their first name, last name, email, and password.

#### Key Features:

- Form fields for:
  - First Name
  - Last Name
  - Email
  - Password
- On form submission:
  - The captain data is stored in the `CaptainData` state.
  - The form fields are cleared.

#### Example State:

```json
{
  "fullName": {
    "FirstName": "John",
    "LastName": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "password123"
}
```

---

### **Captain Login**

**File:** `src/pages/CaptainLogin.jsx`

- This page allows captains to log in by providing their email and password.

#### Key Features:

- Form fields for:
  - Email
  - Password
- On form submission:
  - The login data is stored in the `CaptainData` state.
  - The form fields are cleared.

#### Example State:

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

---

### **User Context**

**File:** `src/Context/UserContext.jsx`

- This file provides a global context for managing user data across the application.

#### Key Features:

- `UserDataContext` is created using React's `createContext`.
- The context provides:
  - `user`: The current user data.
  - `setUser`: A function to update the user data.

#### Example Usage:

```jsx
import { useContext } from "react";
import { UserDataContext } from "../Context/UserContext";

const ExampleComponent = () => {
  const [user, setUser] = useContext(UserDataContext);

  return <div>Welcome, {user.fullName.firstname}</div>;
};
```

---

## Navigation

### Routes

The application uses React Router for navigation. Below are the routes and their corresponding components:

| Route             | Component       | Description             |
| ----------------- | --------------- | ----------------------- |
| `/`               | `Home`          | Displays the home page. |
| `/login`          | `UserLogin`     | User login page.        |
| `/signup`         | `UserSignup`    | User signup page.       |
| `/captain-login`  | `CaptainLogin`  | Captain login page.     |
| `/captain-signup` | `CaptainSignup` | Captain signup page.    |

---

## Example Usage

### User Signup

1. Navigate to `/signup`.
2. Fill in the form with:
   - First Name
   - Last Name
   - Email
   - Password
3. Submit the form to store the user data in the state.

### Captain Login

1. Navigate to `/captain-login`.
2. Enter the captain's email and password.
3. Submit the form to store the login data in the state.

---

## Notes

- The application uses React's `useState` for managing local component state.
- The `UserDataContext` provides a global state for user data.
- Ensure that the backend API is running to handle form submissions and authentication.
