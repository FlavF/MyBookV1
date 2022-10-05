"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//Controllers
const books_1 = require("../controllers/books");
const router = (0, express_1.Router)();
//add a new book
router.post("/", books_1.createBook);
//get all the books
router.get("/", books_1.getBooks);
//update a book
router.patch("/:_id", books_1.updateBook);
//delete a book
router.delete("/:_id", books_1.deleteBook);
exports.default = router;
