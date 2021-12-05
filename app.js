const { fake } = require("faker/locale/pl");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123",
  database: "megaK",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("DB connect");
});

for (let i = 0; i < 20; i++) {
  let cars = {
    producent: fake("{{vehicle.manufacturer}}"),
    model: fake("{{vehicle.model}}"),
    color: fake("{{vehicle.color}}"),
  };
  let sql = "INSERT INTO cars SET ?";
  db.query(sql, cars, (err, result) => {
    if (err) throw err;
    //  console.log(result);
  });
}
db.end();
