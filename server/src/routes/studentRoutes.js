import express from "express";
import {
  addStudent,
  deleteStudent,
  getAllStudents,
  updateStudent,
} from "../controllers/studentsController.js";

const router = express.Router();

router.get("/getAllStudents", getAllStudents);
router.post("/addStudent", addStudent);
router.post("/updateStudent", updateStudent);
router.post("/deleteStudent/:nim", deleteStudent);

export default router;
