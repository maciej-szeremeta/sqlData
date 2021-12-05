const { fake } = require("faker/locale/pl");
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost", // adres bazy
  port: "3306", // port ( * opcjonalnie)
  user: "root", // użytkownik
  password: "123", // hasło
  database: "megaK", // nazwa bazy
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
