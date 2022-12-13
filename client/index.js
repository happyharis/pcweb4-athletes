import { createConnection } from "mysql";
var db = createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "book_review",
});

db.connect();

function getData() {
  db.query("SELECT * from ", function (error, results) {
    if (error) throw error;
    console.log("The solution is: ", results[0].solution);
  });
}

db.end();
