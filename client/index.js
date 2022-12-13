import { createConnection } from "mysql";
var db = createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "athletes",
});

db.connect();

function getData() {
  db.query("SELECT * from ", function (error, results) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  });
}

db.end();
