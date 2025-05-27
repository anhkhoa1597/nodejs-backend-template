# 🛠️ Node.js + Express API Template

A clean and modular RESTful API template built with **Node.js**, **Express**, and **MongoDB**, following the **MVC architecture**. Ideal for small to medium backend projects.

---

## 📁 Project Structure

```
my-backend-template/
├── controllers/       # Route handlers / logic
├── models/            # Mongoose schemas
├── routes/            # API route definitions
├── middlewares/       # Error handling and custom middleware
├── config/            # Database and environment configuration
├── .env               # Environment variables
├── server.js          # Application entry point
├── package.json
└── README.md
```

---

## 🚀 Features

- ✅ Express + MVC structure
- ✅ MongoDB with Mongoose
- ✅ CORS, Helmet, Morgan, Dotenv
- ✅ Centralized error handling
- ✅ Ready for JWT or Auth integration
- ✅ Nodemon for auto-reload during development

---

## 🧩 Requirements

- Node.js >= 14
- MongoDB (local or cloud e.g. MongoDB Atlas)
- npm or yarn

---

## 📦 Installation

```bash
git clone https://github.com/your-username/my-backend-template.git
cd my-backend-template
npm install
```

---

## ⚙️ Configuration

Create a `.env` file in the root with the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/myapp
```

You can also use services like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud database.

---

## 🧪 Running the Server

```bash
npm run dev   # uses nodemon
```

or

```bash
node server.js
```

Server will start on: `http://localhost:5000`

---

## 📡 API Endpoints

### Base URL:

`/api/users`

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | `/`      | Get all users     |
| POST   | `/`      | Create a new user |

---

## 🧱 Sample Model (`User.js`)

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
```

---

## 🐞 Error Handling

All unhandled errors are caught by a global middleware:  
`middlewares/errorHandler.js`

You can customize it to return different formats or HTTP codes.

---

## 📤 Deployment

To deploy:

1. Set correct `MONGO_URI` and `PORT`
2. Use services like **Render**, **Railway**, **Vercel (for frontend)**, or **IBM Code Engine**
3. Set `NODE_ENV=production` and use `npm start`

---

## 📚 License

This project is licensed under the MIT License.

---

## 🙌 Credits

Template by Khoa Dang Anh. Inspired by real-world project structures.
