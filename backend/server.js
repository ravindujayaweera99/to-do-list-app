import express from "express";
import taskRoutes from "./routes/taskRoutes.js";

const PORT = process.env.PORT || 5000

const app = express();

app.use("/api/tasks", taskRoutes);

app.listen(8000, () => {
  console.log("Server Running on Port 8000!");
});
