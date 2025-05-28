import express from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

// GET /users - Get all users
router.get("/", getAllUsers);

// GET /users/:id - Get user by ID
router.get("/:id", getUserById);

// POST /users - Create a new user
router.post("/", createUser);

// PUT /users/:id - Update user by ID
router.put("/:id", updateUser);

// DELETE /users/:id - Delete user by ID
router.delete("/:id", deleteUser);

export default router;
