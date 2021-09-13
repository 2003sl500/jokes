const { model } = require("mongoose")
const JokesController = require("../controllers/jokes.controller")

module.exports = app => {
    // Create
    app.post("/api/jokes", JokesController.createJoke)
    // Read
    app.get("/api/jokes", JokesController.allJokes)
    app.get("/api/jokes/:id", JokesController.oneJoke)
    // Update
    app.put("/api/jokes/:id", JokesController.updateJokes)
    // Delete
    app.delete("/api/jokes/:id", JokesController.deleteJokes)
}