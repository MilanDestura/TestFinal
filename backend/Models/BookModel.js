const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    bookTitle: {
        type: String,
        required: true
    },
    bookAuthor:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    }
});

const Book = mongoose.model('300370571-milan', BookSchema);
module.exports = {Book, BookSchema};