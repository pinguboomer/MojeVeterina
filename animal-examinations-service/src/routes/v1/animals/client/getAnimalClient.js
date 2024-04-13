const {Animal} = require("../../../../model/Animal");
const ObjectId = require('mongoose').Types.ObjectId;

async function getAnimalsClient(req, res) {
    try {

        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const animals = await Animal.find({owner: req.params.id})

        // if (!animals) {
        //     console.log('Animal not found1')
        //     return res.sendStatus(404)
        // }
        res.status(200).json(animals)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getAnimalsClient;


