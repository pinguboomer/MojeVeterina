const {AnimalExamination} = require("../../../model/AnimalExamination");

async function getExaminations(req, res) {
    try {
        const animals = await AnimalExamination.find({})   // TODO filtrace?

        res.status(200).json(animals)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getExaminations;