const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author:{
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