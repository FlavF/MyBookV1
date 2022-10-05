"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const app = (0, express_1.default)();
//? Middle ware
app.use((0, body_parser_1.json)());
//? Routers Setup
const book_1 = __importDefault(require("./routes/book"));
//? Routes
app.use("/books", book_1.default);
//? error response
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
module.exports = app;
