import mysql from "mysql";
import { config } from "dotenv";

config();

const dbConnection = () => {
  const { DB_HOST, DB_NAME, DB_USERNAME, DB_PASSWORD } = process.env;
  const connection = mysql.createConnection({
    host: DB_HOST,
    database: DB_NAME,
    user: DB_USERNAME,
    password: DB_PASSWORD,
  });

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
    console.log("MySQL connected.");
  });

  return connection;
};

export default dbConnection;
