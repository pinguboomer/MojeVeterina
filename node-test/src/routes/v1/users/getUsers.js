const {User} = require("../../../model/User");

async function getUsers(req, res) {
    try {
        const users = await User.find({})   // TODO filtrace?

        res.status(200).json(users)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getUsers;