import express from "express";
import cors from "cors";
import {
  addStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "./src/controllers/studentsController.js";

const app = express();
const port = 3000;

app
  .use(cors())
  .use(express.json())
  .listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
  );

app.get("/api/getAllStudents", getAllStudents);

app.post("/api/addStudent", addStudent);

app.post("/api/updateStudent", updateStudent);

app.post("/api/deleteStudent/:nim", deleteStudent);
