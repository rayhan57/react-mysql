import express from "express";
import cors from "cors";
import {
  addStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "./src/controllers/studentsController.js";
import dbConnection from "./src/database/dbConnection.js";

const app = express();
const port = 3000;
const db = dbConnection();

app
  .use(cors())
  .use(express.json())
  .listen(port, () =>
    console.log(`Server running at http://localhost:${port}`)
  );

db.connect((err) => {
  if (err) {
    console.log("Error connecting to MySQL...", err);
  } else {
    console.log("MySQL connected...");
  }
});

app.get("/api/getAllStudents", getAllStudents);

app.post("/api/addStudent", addStudent);

app.post("/api/updateStudent", updateStudent);

app.post("/api/deleteStudent/:nim", deleteStudent);
