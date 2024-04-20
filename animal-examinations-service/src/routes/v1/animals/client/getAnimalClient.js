const {Animal} = require("../../../../model/Animal");
const ObjectId = require('mongoose').Types.ObjectId;

async function getAnimalsClient(req, res) {
    try {

        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const animals = await Animal.find({owner: req.params.id})

        res.status(200).json(animals);
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getAnimalsClient;


