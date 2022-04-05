const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use('/api/miembros', require('./routes/miembros.routes'));
app.use('/api/personas', require('./routes/personas.routes'));
app.use('/api/aderente', require('./routes/aderente.routes'));




module.exports = app;
