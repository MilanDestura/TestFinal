
const port = 5000;
const express = require("express");
const bodyParser = require("body-parser")
const cors = require('cors');
const path = require('path');
const mongoose = require("mongoose")
const uri = "mongodb+srv://dodong:12345@mernapp.aj72xna.mongodb.net/BookList";
// const uri = "mongodb://localhost:27017/BookList";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.on('error', console.error.bind(console, 'connection error:'));


connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const BookModel = require("./Models/BookModel");
const bookRouter = require("./Routes/bookRouter");

app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/v1', bookRouter);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}   );
