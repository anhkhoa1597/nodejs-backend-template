# 🛠️ Node.js + Express Backend Template

A modular and secure RESTful API backend built with **Node.js**, **Express**, and **MongoDB**, following **MVC architecture** with clear separation of concerns and production-ready configurations.

---

## 📁 Project Structure

```
backend-template/
├── config/             # DB connection config
│   └── db.js
├── controllers/        # Business logic
│   └── userController.js
├── logs/               # Winston log files
│   ├── combined.log
│   ├── debug.log
│   └── error.log
├── middlewares/        # Custom middleware (e.g. error handler)
│   └── errorHandler.js
├── models/             # Mongoose schemas
│   └── user.js
├── routes/             # API route definitions
│   └── user.routes.js
├── utils/              # Logger config (Winston)
│   └── logger.js
├── .env                # Environment variables (not committed)
├── .gitignore          # Ignored files and folders
├── app.js              # Express app setup
├── server.js           # App bootstrap and DB connect
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Features

- ✅ MVC folder structure
- ✅ MongoDB with Mongoose
- ✅ CORS, Helmet, Morgan, Dotenv
- ✅ Winston-based logging
- ✅ Centralized error handling
- ✅ Ready for JWT or authentication integration
- ✅ Auto-reload with Nodemon in development

---

## 🧩 Requirements

- Node.js >= 14
- MongoDB (local or cloud e.g. MongoDB Atlas)
- npm or yarn

---

## 📦 Installation

```bash
git clone https://github.com/your-username/backend-template.git
cd backend-template
npm install
```

---

## ⚙️ Configuration

Create a `.env` file in the root with the following:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/myapp
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

---

## 🧪 Running the Server

```bash
npm run dev   # uses nodemon
```

or

```bash
node server.js
```

Server runs at: `http://localhost:5000`

---

## 📡 API Endpoints

### Base URL:

`/users`

| Method | Endpoint | Description       |
| ------ | -------- | ----------------- |
| GET    | `/`      | Get all users     |
| POST   | `/`      | Create a new user |

---

## 🐞 Error Handling

All unhandled errors are captured by:
`middlewares/errorHandler.js`

Customize to suit your needs (log format, status codes, etc.)

---

## 📝 Logging

Logs are written using `winston` to:

- `logs/combined.log`
- `logs/error.log`
- `logs/debug.log`

---

## 📤 Deployment

To deploy:

1. Set `MONGO_URI`, `PORT`, `FRONTEND_URL`
2. Use services like **Render**, **Railway**, or **IBM Code Engine**
3. Set `NODE_ENV=production` and run:

```bash
npm start
```

---

## 📚 License

This project is licensed under the MIT License.

---

## 🙌 Credits

Template by Khoa Dang Anh. Inspired by clean backend architectures.
