//create web server
const express = require('express');
const app = express();
const port = 3000;

//set up static file server
app.use(express.static('public'));

//set up data
const comments = [
  {name: 'John', comment: 'Hello!'},
  {name: 'Jane', comment: 'Hi!'},
  {name: 'Joe', comment: 'Howdy!'}
];

//set up route
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

//start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});