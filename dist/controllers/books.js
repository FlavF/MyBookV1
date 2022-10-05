"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.getBooks = exports.createBook = void 0;
const books_1 = require("../models/books");
const db = require("../db/db");
//?Create a new book
const createBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    // Get the data from the body
    const title = (req.body.title);
    const author = (req.body.author);
    const status = (req.body.status);
    try {
        const book = new books_1.Book({
            title,
            author,
            status
        });
        yield book.save();
        res.status(201).send(book);
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.createBook = createBook;
//?Get all books
const getBooks = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield books_1.Book.find({});
        res.status(201).send(books);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.getBooks = getBooks;
//? Update book
const updateBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //get id from the header
    const bookId = req.params._id;
    // get the new information to be replace
    const updatedTitle = req.body.title;
    const updatedAuthor = req.body.author;
    const updatedStatus = req.body.status;
    // find the book id to be able to update
    try {
        const book = yield books_1.Book.findOne({ _id: bookId });
        if (!book) {
            res.status(404).send();
        }
        if (book !== null) {
            yield book.updateOne({ title: updatedTitle, author: updatedAuthor, status: updatedStatus });
            const newBook = yield books_1.Book.findOne({ _id: bookId });
            res.status(201).send(newBook);
        }
    }
    catch (e) {
        res.status(400).send(e);
    }
});
exports.updateBook = updateBook;
//?Delete book
const deleteBook = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //get id from the header
    const bookId = req.params._id;
    try {
        // find the book id to be able to update
        const book = yield books_1.Book.findOneAndDelete({ _id: bookId });
        if (!book) {
            return res.status(404).send();
        }
        res.send(book);
    }
    catch (e) {
        res.status(500).send(e);
    }
});
exports.deleteBook = deleteBook;
