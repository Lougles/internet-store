require('dotenv').config()
const express = require('express');
const sequelize = require('./db')

const PORT = process.env.PORT || 5000;

const test = process.env.PORT
console.log(test);

const app = express()

const start = async () => {
  try {
    // await sequelize.authenticate();
    // await sequelize.sync();
    app.listen(process.env.PORT, () => console.log(`server is starting on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
}

start();

