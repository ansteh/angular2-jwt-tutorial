'use strict';
const express        = require('express');
const app            = express();

// const bodyParser     = require('body-parser');
// const cors           = require('cors');

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post('/api/graph', (req, res) => {
//   retrieval.getSite(20)
//     .then((list) => {
//       res.json(list);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(404).send('Something broke!');
//     });
// });

const server = require('http').Server(app);

server.listen(3000, () => {
  console.log('listening on *:3000');
});