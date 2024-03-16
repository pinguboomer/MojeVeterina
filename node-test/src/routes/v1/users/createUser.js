const {User, UserSchema} = require("../../../model/User");

async function createUser(req, res) {
    try {
        const {value, error} = UserSchema.validate(req.body)

        if(error) {
            return res.sendStatus(400)
        }

        const user = new User(value)
        await user.save()

        res.status(201).send(user)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = createUser;