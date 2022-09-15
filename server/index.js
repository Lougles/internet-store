const path = require('path');
require('dotenv').config()
const express = require('express');
const sequelize = require('./db')
const models = require('./models/models');
const cors = require('cors');


const PORT = process.env.PORT || 1234;

const test = process.env.PORT
console.log("TEST", test);

const app = express()
app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
  res.status(200).json({message: 'WORKING'})
})

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

