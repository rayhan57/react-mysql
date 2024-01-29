import dbConnection from "../database/dbConnection.js";
import handleResponse from "../utils/handleResponse.js";

const db = dbConnection();

export const getAllStudents = (req, res) => {
  const query = "SELECT * FROM mahasiswa";

  db.query(query, (err, result) => {
    if (err) {
      handleResponse(res, false, "Failed to get all students");
    } else {
      const allStudents = JSON.parse(JSON.stringify(result));
      handleResponse(res, true, "Retrieved all students", allStudents);
    }
  });
};

export const addStudent = (req, res) => {
  const { nim, name, age, major } = req.body;
  const checkQuery = "SELECT * FROM mahasiswa WHERE nim = ?";
  const insertQuery = "INSERT INTO mahasiswa VALUES (?, ?, ?, ?)";
  const values = [nim, name, age, major];

  db.query(checkQuery, [nim], (checkErr, checkResult) => {
    if (checkResult.length > 0) {
      handleResponse(res, false, "Student with the same NIM already exists");
    } else {
      db.query(insertQuery, values, (insertErr, insertResult) => {
        if (insertErr) {
          handleResponse(res, false, "Failed to add student");
        } else {
          const insertedStudent = { nim, name, age, major };
          handleResponse(res, true, "Added new student", insertedStudent);
        }
      });
    }
  });
};

export const updateStudent = (req, res) => {
  const { nim, name, age, major } = req.body;
  const updateQuery =
    "UPDATE mahasiswa SET name = ?, age = ?, major = ? WHERE nim = ?";
  const values = [name, age, major, nim];

  db.query(updateQuery, values, (err, result) => {
    if (err) {
      handleResponse(res, false, "Failed to update student");
    } else {
      const updatedStudent = { nim, name, age, major };
      handleResponse(res, true, "Updated student", updatedStudent);
    }
  });
};

export const deleteStudent = (req, res) => {
  const nim = req.params.nim;
  const deleteQuery = "DELETE FROM mahasiswa WHERE nim = ?";
  const values = [nim];

  db.query(deleteQuery, values, (err, result) => {
    if (err) {
      handleResponse(res, false, "Failed to delete student");
    } else {
      handleResponse(res, true, "Deleted student");
    }
  });
};
