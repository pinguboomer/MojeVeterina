const {AnimalExamination} = require("../../../../model/AnimalExamination");
const ObjectId = require('mongoose').Types.ObjectId;

async function getExaminationAnimal(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const examinations = await AnimalExamination.find({animal: req.params.id})

        res.status(200).json(examinations)
    }
    catch (e) {
        console.log(e)
        res.status(500)
    }
}

module.exports = getExaminationAnimal