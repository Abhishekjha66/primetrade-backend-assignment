# PrimeTrade Backend – Assignment

This is the backend API implementation for the PrimeTrade Intern Assignment.  
It includes authentication (register/login) and CRUD APIs for managing tasks.

---

## 🚀 Features

- User Register & Login (JWT Auth)
- Protected Routes using Middleware
- Task CRUD:
  - Create Task
  - Get Tasks
  - Update Task
  - Delete Task
- MongoDB Atlas Integration
- Postman Collection included
- Simple UI Included (index.html)

---

## 🛠 Technologies Used

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT
- Joi Validation
- Bcrypt
- Postman

---

## 🔧 Environment Variables  
Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_here
JWT_EXPIRES_IN=7d
```

---

## ▶ Run the Project

Install dependencies:

```bash
npm install
```

Run server:

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## 🧪 API Testing (Postman)

Use these API endpoints:

| Method | Endpoint                     | Description        |
|--------|------------------------------|--------------------|
| POST   | /api/v1/auth/register        | Register user      |
| POST   | /api/v1/auth/login           | Login user         |
| POST   | /api/v1/tasks                | Create task        |
| GET    | /api/v1/tasks                | Get tasks          |
| PUT    | /api/v1/tasks/:id            | Update task        |
| DELETE | /api/v1/tasks/:id            | Delete task        |

---

## 🌐 Deployment

This project is ready for deployment on platforms like:

- Render
- Railway
- Cyclic

---

## © Author  
**Abhishek Jha**  
GitHub: https://github.com/Abhishekjha66
