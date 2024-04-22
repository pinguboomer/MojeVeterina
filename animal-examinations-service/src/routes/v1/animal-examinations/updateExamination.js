const {AnimalExamination, AnimalExaminationSchema} = require("../../../model/AnimalExamination");
const ObjectId = require('mongoose').Types.ObjectId;

async function updateExamination(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }
        const {value, error} = AnimalExaminationSchema.validate(req.body)

        if(error) {
            // console.log(error)
            return res.sendStatus(400)
        }

        const updated = await AnimalExamination.updateOne({_id: req.params.id}, value)

        if (updated.matchedCount === 0) {
            return res.sendStatus(404)
        }

        res.sendStatus(204)
    }
    catch (e) {
        res.sendStatus(500)
    }
}

module.exports = updateExamination;