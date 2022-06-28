const express = require('express');
const axios = require('axios');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => { 
 res.send("<h1>Home page</h1>");
});

app.get('/users', (req, res) => { 
  axios.get('https://randomuser.me/api/?page=1&results=10')
    .then(response => {
      res.send(response.data);
  });
});

app.listen(PORT, () => {
 console.log(`server started on port ${PORT}`);
});