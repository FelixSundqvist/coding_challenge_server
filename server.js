const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({path: './config.env'});

const PORT = process.env.PORT || 5000;

const DB = process.env.DB_CONNECTION.replace(/<password>/, process.env.DB_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(connect => console.log(`Connection Successful`))
    .catch(error => console.log(error));
app.listen(PORT, () => console.log(`server running on ${PORT}`))