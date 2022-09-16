const path = require('path');
require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models');
const cors = require('cors');

const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandingMiddleware')

const PORT = process.env.PORT || 1234;

const test = process.env.PORT
console.log("TEST", test);

const app = express()
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "/static"));
app.use(fileUpload({}))
app.use('/api',router)
app.use(errorHandler)

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`server is starting on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();

