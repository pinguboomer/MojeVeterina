const {Animal} = require("../../../model/Animal");

async function getAnimals(req, res) {
    try {
        const animals = await Animal.find({})   // TODO filtrace?

        res.status(200).json(animals)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getAnimals;