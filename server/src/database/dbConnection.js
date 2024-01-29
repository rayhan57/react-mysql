import mysql from "mysql";

const dbConnection = () => {
  return mysql.createConnection({
    host: "localhost",
    database: "react_mysql",
    user: "root",
    password: "",
  });
};

export default dbConnection;
