const {AnimalExamination} = require("../../../model/AnimalExamination");
const ObjectId = require('mongoose').Types.ObjectId;

async function deleteExamination(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const deleted = await AnimalExamination.deleteMany({patient: req.params.id})

        res.status(200).send(deleted)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = deleteExamination;