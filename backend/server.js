const express = require('express');
const mysql = require('mysql');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'champstar',
});

app.post('/register', (req, res) => {
  const sql = "INSERT INTO users(name, email, password, phone) VALUES (?,?,?,?)";
  db.query(sql, [req.body.name, req.body.email, req.body.password, req.body.phone], (err, data) => {
    if (err) return res.json("Inregistrarea nu a fost adaugata!");
    if(data.length > 0) {
      return res.json("Nu se poate adauga");
    } else {
      return res.json("Adaugat cu succes");
    }
  })
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
      if (err) return res.json("Conectare esuata!");
      if(data.length > 0) {
        return res.json("Conectat cu succes");
      } else {
        return res.json("No record");
      }
    })
});
  
app.listen(8081, () => {
  console.log("Listening...");
})