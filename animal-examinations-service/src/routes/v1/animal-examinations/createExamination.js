const {AnimalExaminationSchema, AnimalExamination} = require("../../../model/AnimalExamination");


async function createExamination(req, res) {
    try {
        const {value, error} = AnimalExaminationSchema.validate(req.body)

        if(error) {
            return res.sendStatus(400)
        }

        const examination = new AnimalExamination(value)

        await examination.save()

        res.status(201).send(examination)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = createExamination;