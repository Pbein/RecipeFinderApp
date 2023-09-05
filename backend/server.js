const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

//Load env vars
dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to the Recipe Finder API');
});

//Connect to DB
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
})
.then((result) => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => console.log(err));