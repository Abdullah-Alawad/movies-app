const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+ "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNWU5ZDllMGU1NmZiNWU3NThlNDdmYWZkOTdiNmM2ZiIsInN1YiI6IjY1NjYwMmUzNmMwYjM2MDBlNGRiYzQ2NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YX6hYgkuzF5tWmexeSHHIGsTAZKgkenbn620fCiH-VI"
    }
  };

const conn = require("./connection");
app.use(cors());
app.use(bodyParser.json());

app.get("/", async (req, res) => {
   const response = await fetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=44', options)
   const data = await response.json();
   data.results.forEach(async actor => {
        if(actor.gender === 1){
            const sql = `INSERT INTO actors (id, name, gender, profile_path) VALUES ('${actor.id}', '${actor.name}', ${actor.gender}, '${actor.profile_path}')`;
            conn.query(sql, function (err, result) {
              if (err) throw err;
              console.log("1 record inserted");
            });   
        }
   });
res.json(data)
});

app.listen(3002, () => {
    conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    });
});