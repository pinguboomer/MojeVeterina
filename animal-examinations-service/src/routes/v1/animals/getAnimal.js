const {Animal} = require("../../../model/Animal");
const ObjectId = require('mongoose').Types.ObjectId;

async function getAnimal(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const animal = await Animal.findOne({_id: req.params.id})

        if (!animal) {
            return res.sendStatus(404)
        }

        res.status(200).json(animal)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getAnimal