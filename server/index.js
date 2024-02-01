import cors from "cors";
import express from "express";
import studentRoutes from "./src/routes/studentRoutes.js";
import userRoutes from "./src/routes/userRoutes.js";

const app = express();
const port = 3000;

app
  .use(cors())
  .use(express.json())
  .use("/api/users", userRoutes)
  .use("/api/students", studentRoutes)
  .listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
  );
