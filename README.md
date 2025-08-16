# To-Do-List
# 📝 To-Do List Web App

A full-stack to-do list application built with **React**, **Node.js**, **Express**, and **PostgreSQL**. This project allows users to add and delete simple tasks from a database-backed list.

## 🚀 Features

- Add new tasks
- Delete existing tasks
- Persistent data with PostgreSQL
- Clean and minimal UI
- Built with modern React (hooks + Vite)

---

## 🛠️ Tech Stack

| Frontend     | Backend           | Database   |
|--------------|-------------------|------------|
| React (Vite) | Node.js + Express | PostgreSQL |
| Axios        | CORS              | pg module  |
| JavaScript   | dotenv            | pgAdmin    |

---

## 📦 Project Structure

### 🔧 Prerequisites

- Node.js & npm
- PostgreSQL installed and running
- Git

---

### 🖥️ Installation & Run

1. **Clone the repository**

```bash
git clone https://github.com/LennyCarey/To-Do-List.git
cd To-Do-List

2. **Set up the PostgreSQL database**
CREATE TABLE todos (
  id SERIAL PRIMARY KEY,
  task TEXT NOT NULL
);

3. **Backend setup**
cd server
cp .env.example .env   # Or manually create the .env file
npm install
node index.js          # Start the backend server on http://localhost:5000

4. **Frontend setup**
cd ../client
npm install
npm run dev            # Starts frontend on http://localhost:5173

5. **Visit the app**
Go to http://localhost:5173

### **Environmental Variables**
Inside server/.env
PGUSER=your_postgres_username
PGHOST=localhost
PGDATABASE=todo_db
PGPASSWORD=your_password
PGPORT=5432
