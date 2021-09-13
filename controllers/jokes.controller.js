const { response } = require("express")
const { model } = require("mongoose")
const Cat = require("../models/jokes.models")

module.exports.createJoke = (req, res) => {
    Cat.create(req.body)
        .then(newJokes => res.json(newJokes))
        .catch(err => res.json(err))
}

module.exports.allJokes = (req, res) => {
    Cat.find({})
        .then(allJokes => res.json(allJokes))
        .catch(err => res.json(err))
}

module.exports.oneJoke = (req, res) => {
    const {id} = req.params
    Cat.find({ _id : id })
        .then(oneJokes => res.json(oneJokes))
        .catch(err => res.json(err))
}

module.exports.updateJokes = (req, res) => {
    const {id} = req.params
    Cat.findByIdAndUpdate({ _id : id }, req.body, {new:true})
        .then(updatedJokes => res.json(updatedJokes))
        .catch(err => res.json(err))
}

module.exports.deleteJokes = (req, res) => {
    const {id} = req.params
    Cat.findOneAndDelete({ _id : id })
        .then(response => res.json(response))
        .catch(err => res.json(err))
}