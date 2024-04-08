const {User} = require("../../../model/User");
const Joi = require("joi");
const {EMAIL_REGEX, PHONE_REGEX} = require("../../../constants");

async function getUsers(req, res) {
    // res.params | req.query | req.body
    // req.user

    let filter;
    if(req.query.role) {
        filter = {role: req.query.role}
    }
    else{
        filter = {};
    }

    try {
        const users = await User.find(filter, {
            password: 0,
            google_id: 0
        })

        res.status(200).json(users)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getUsers;