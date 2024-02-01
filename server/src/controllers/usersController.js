import dbConnection from "../database/dbConnection.js";
import handleResponse from "../utils/handleResponse.js";

const db = dbConnection();

export const login = (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";
  const values = [username, password];

  db.query(query, values, (err, result) => {
    const user = JSON.parse(JSON.stringify(result));

    if (user.length > 0) {
      handleResponse(res, true, "Login Successful", user[0]);
    } else {
      handleResponse(res, false, "Username or password is incorrect");
    }
  });
};

export const register = (req, res) => {
  const { name, email, username, password } = req.body;
  const checkQuery = "SELECT * FROM users WHERE username = ?";
  const insertQuery = "INSERT INTO users VALUES (?, ?,?, ?)";
  const values = [name, email, username, password];

  db.query(checkQuery, [username], (checkErr, checkResult) => {
    if (checkResult.length > 0) {
      handleResponse(res, false, "Username already exists");
    } else {
      db.query(insertQuery, values, (insertErr, insertResult) => {
        if (insertErr) {
          handleResponse(res, false, "Failed to add user");
        } else {
          const insertedUser = { name, email, username, password };
          handleResponse(res, true, "Added new user", insertedUser);
        }
      });
    }
  });
};
