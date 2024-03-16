const {User, UserSchema} = require("../../../model/User");
const ObjectId = require('mongoose').Types.ObjectId;

async function updateUser(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }
        const {value, error} = UserSchema.validate(req.body)

        if(error) {
            console.log(error)
            return res.sendStatus(400)
        }

        const updated = await User.updateOne({_id: req.params.id}, value)

        if (updated.matchedCount === 0) {
            return res.sendStatus(404)
        }

        console.log(updated)

        res.sendStatus(204)
    }
    catch (e) {
        res.sendStatus(500)
    }
}

module.exports = updateUser;