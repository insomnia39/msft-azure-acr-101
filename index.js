const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.get('/api', (req, res) => { 
  const name = req.query.name; 
  res.send(`Hello, ${name}!`);
});

app.get('/api/:name', (req, res) => { 
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
