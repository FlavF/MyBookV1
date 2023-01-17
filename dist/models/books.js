"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = exports.bookSchema = void 0;
const mongoose_1 = require("mongoose");
//Schema
exports.bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    status: { type: String, required: true },
});
// Model
exports.Book = (0, mongoose_1.model)("Book", exports.bookSchema);
