const {Animal, AnimalSchema} = require("../../../model/Animal");

async function createAnimal(req, res) {
    try {
        const {value, error} = AnimalSchema.validate(req.body)

        if(error) {
            return res.sendStatus(400)
        }

        const animal = new Animal(value)

        await animal.save()

        res.status(201).send(animal)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = createAnimal;