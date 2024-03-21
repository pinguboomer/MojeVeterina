const {Animal, AnimalSchema} = require("../../../model/Animal");
const ObjectId = require('mongoose').Types.ObjectId;

async function updateAnimal(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }
        const {value, error} = AnimalSchema.validate(req.body)

        if(error) {
            console.log(error)
            return res.sendStatus(400)
        }

        const updated = await Animal.updateOne({_id: req.params.id}, value)

        if (updated.matchedCount === 0) {
            return res.sendStatus(404)
        }

        console.log(updated)

        res.sendStatus(204)
    }
    catch (e) {
        res.sendStatus(500)
    }
}

module.exports = updateAnimal;