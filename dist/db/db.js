"use strict";
//? Module
const mongoose = require("mongoose");
//? connec to the database
const db = mongoose.connect(process.env.MONGODB_URL);
//? Create a connection
// mongoose.createConnection(process.env.MONGODB_URL);
module.exports = db;
