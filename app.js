const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const Scoreboard = require('./models/scoreboardModel');

app.use(express.json());
app.use(morgan('short'));
app.use(cors());

app
.get('/', async (req, res) => {
    try {
        const scores = await Scoreboard
        .find()
        .sort(req.query.sort);
        console.log(scores)
        res
            .status(200)
            .json(scores);
    } catch (error) {
        console.log(error);
    }
})
.post('/', async (req, res) => {
    try {
        const newScore = await Scoreboard.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                score: newScore
            }
        })
    }catch(error){
        console.log(error)
    }
})

module.exports = app;