const {User, UserSchema} = require("../../../model/User");
const bcrypt = require('bcrypt');

async function createUser(req, res) {
    try {
        const {value, error} = UserSchema.validate(req.body)

        if(error) {
            if (process.env.NODE_ENV === "development") {
                console.error(error)
            }
            return res.sendStatus(400)
        }

        value.password = bcrypt.hashSync(value.password, 12);

        const user = new User(value)
        await user.save()

        // TODO send email

        res.status(201).send(user)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = createUser;