require("dotenv").config();

const express = require('express');

const app = express();

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { res.send('Server is up and running!') });

app.listen(3000, () => {
    console.log(`Server is listening on port 3000`);
  });