# Generowanie danych do bazy MySql za pomocą NodeJS oraz Faker.js

## Kopiowanie edytora kodu

```bash
git clone https://github.com/maciej-szeremeta/sqlData.git .
```

## Instalacja

Instalacja odbywa się za pomocą `npm install` polecenia :

```bash
npm install
```

## Konfiguracja

Konfiguracja połączenia:

```js
const db = mysql.createConnection({
  host: "localhost", // adres bazy
  port: "3306", // port ( * opcjonalnie)
  user: "root", // użytkownik
  password: "123", // hasło
  database: "megaK", // nazwa bazy
});
```

Obiekt przekazywany do tabeli `cars` w postaci rekordu z danymi `producent`, `model`, `color` które są nazwami kolumn w tabeli.

```js
let cars = {
  producent: fake("{{vehicle.manufacturer}}"),
  model: fake("{{vehicle.model}}"),
  color: fake("{{vehicle.color}}"),
};
```

## Start

```bash
npm start
```

## Zastosowane Biblioteki

Generator przykładowych danych [Faker.js](https://www.npmjs.com/package/faker "Faker.js")

Moduł do wymiany danych z MySql [MySql](https://www.npmjs.com/package/mysql "MySql")
