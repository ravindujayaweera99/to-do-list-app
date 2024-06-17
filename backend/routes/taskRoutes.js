import express from "express";
import {
  getGoals,
  createGoal,
  editGoal,
  deleteGoal,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getGoals);
router.post("/", createGoal);
router.put("/:id", editGoal);
router.delete("/:id", deleteGoal);

export default router;
