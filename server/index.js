const userRouter = require('./routers/user.router');

const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const PORT = 3000;

app.use(cors());

app.use(userRouter);

app.get('/users', (req, res) => { 
  axios.get('https://randomuser.me/api/?page=1&results=10')
    .then(response => {
      res.send(response.data);
  });
});

app.listen(PORT, () => {
 console.log(`server started on port ${PORT}`);
});