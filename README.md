# 💰 Finance Data Processing & Access Control Backend

A scalable backend system designed for managing financial records with **role-based access control (RBAC)**, secure authentication, and dashboard analytics.

---

## 🚀 Live Demo

* 🌐 API Base URL: `http://localhost:5000`
* 📘 Swagger Docs: `http://localhost:5000/api-docs`

> ⚠️ Note: Currently running locally. Can be deployed on Render/Railway if required.

---

## 📌 Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Role-Based Access Control (RBAC)
* Roles:

  * **Viewer** → Dashboard only
  * **Analyst** → Read records + dashboard
  * **Admin** → Full access (CRUD + users)

---

### 👤 User Management

* Register new users
* Login with JWT token
* Update user role/status (Admin only)
* Delete users (Admin only)

---

### 💰 Financial Records

* Create financial entries (Admin)
* View records (Analyst/Admin)
* Update records (Admin)
* Delete records (Admin)
* Filter by:

  * Type (income/expense)
  * Category
  * Date

---

### 📊 Dashboard Analytics

* Total Income
* Total Expenses
* Net Balance
* Category-wise totals
* Monthly trends

---

### 🛡️ Validation & Error Handling

* Input validation
* Proper HTTP status codes
* Centralized error handling middleware

---

### 📦 API Documentation

* Swagger UI integrated
* Interactive API testing

---

### 🐳 Docker Support

* Containerized backend
* MongoDB integration via Docker Compose

---

## 🏗️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (jsonwebtoken)
* **Documentation:** Swagger (swagger-jsdoc, swagger-ui-express)
* **Containerization:** Docker, Docker Compose

---

## 📁 Project Structure

```
finance-backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── app.js
│
├── Dockerfile
├── docker-compose.yml
├── package.json
└── .env
```

---

## ⚙️ Installation & Setup

### 🔹 1. Clone Repository

```
git clone <your-repo-url>
cd finance-backend
```

---

### 🔹 2. Install Dependencies

```
npm install
```

---

### 🔹 3. Setup Environment Variables

Create `.env` file:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

---

### 🔹 4. Run Locally

```
npm run dev
```

---

### 🔹 5. Run with Docker

```
docker compose up --build
```

---

## 🔐 Authentication Flow

1. Register user → `/api/users/register`
2. Login → `/api/users/login`
3. Receive JWT token
4. Use token in headers:

```
Authorization: Bearer <token>
```

---

## 📡 API Endpoints

### 👤 Users

* `POST /api/users/register`
* `POST /api/users/login`
* `GET /api/users` (Admin)
* `PUT /api/users/:id` (Admin)
* `DELETE /api/users/:id` (Admin)

---

### 💰 Records

* `POST /api/records` (Admin)
* `GET /api/records` (Analyst/Admin)
* `PUT /api/records/:id` (Admin)
* `DELETE /api/records/:id` (Admin)

---

### 📊 Dashboard

* `GET /api/dashboard/summary`
* `GET /api/dashboard/category`
* `GET /api/dashboard/monthly`

---

## 🔐 Role-Based Access Control

| Action        | Viewer | Analyst | Admin |
| ------------- | ------ | ------- | ----- |
| Dashboard     | ✅      | ✅       | ✅     |
| View Records  | ❌      | ✅       | ✅     |
| Create Record | ❌      | ❌       | ✅     |
| Update/Delete | ❌      | ❌       | ✅     |

---

## 🧪 Testing

* Swagger UI
* Thunder Client / Postman
* cURL (CLI testing)

---

## ⚠️ Assumptions

* Roles are predefined (viewer, analyst, admin)
* JWT is used for stateless authentication
* MongoDB is used for persistence
* No frontend included

---

## 🚀 Future Improvements

* Pagination & advanced filtering
* Refresh tokens for JWT
* Rate limiting
* Unit & integration testing
* CI/CD pipeline
* Deployment on cloud (Render/AWS)

---

## 👨‍💻 Author

**Siddhant Tiwari**

---

## ⭐ Conclusion

This project demonstrates:

* Clean backend architecture
* Secure authentication & authorization
* Real-world API design
* Scalable and maintainable code practices

---
