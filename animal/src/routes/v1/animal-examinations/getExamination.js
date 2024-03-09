const {AnimalExamination} = require("../../../model/AnimalExamination");
const ObjectId = require('mongoose').Types.ObjectId;

async function getExamination(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const examination = await AnimalExamination.findOne({_id: req.params.id})

        if (!examination) {
            return res.sendStatus(404)
        }

        res.status(200).json(examination)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getExamination