const {User} = require("../../../model/User");
const ObjectId = require('mongoose').Types.ObjectId;

async function getUser(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const user = await User.findOne({_id: req.params.id})

        if (!user) {
            return res.sendStatus(404)
        }

        res.status(200).json(user)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getUser