const mongoose = require("mongoose")

const JokeSchema = new mongoose.Schema({
    joke:  {
        type: String,
        required: [true, "Joke is required"]
    },
    answer:  {
        type: String,
        required: [true, "Jokes answer is required"]
    },
}, {timestamps:true})

const Jokes = mongoose.model("Joke", JokeSchema)

module.exports = Jokes