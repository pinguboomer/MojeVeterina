const {User} = require("../../../model/User");
const ObjectId = require('mongoose').Types.ObjectId;

async function deleteUser(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const deleted = await User.deleteOne({_id: req.params.id})

        if (deleted.deletedCount === 0) {
            return res.sendStatus(404)
        }

        res.sendStatus(204)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = deleteUser;