const mongoose = require('mongoose');

const scoreboardSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a name'],
            trim: true
        },
        score: {
            type: Number,
            required: [true, 'Must have score']
        }
    }
);

const Scoreboard = mongoose.model('Scoreboard', scoreboardSchema);

module.exports = Scoreboard;