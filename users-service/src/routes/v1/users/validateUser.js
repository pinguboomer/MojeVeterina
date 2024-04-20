const {User, UserSchema} = require("../../../model/User");
const ObjectId = require('mongoose').Types.ObjectId;

async function validateUser(req, res) {
    try {
        if(!req.body.user) {
            return res.sendStatus(400)
        }

        const userOriginal = await User.findOne({_id: req.body.user._id},  {
            email: 1,
            role: 1,
            name: 1,
            surname: 1,
        })



        if (
            !userOriginal ||
            req.body.user.email !== userOriginal.email ||
            req.body.user.role !== userOriginal.role ||
            req.body.user.name !== userOriginal.name ||
            req.body.user.surname !== userOriginal.surname){

            return res.status(403).send('Data changed');

        } else{
            return res.sendStatus(204)
        }
    }
    catch (e) {
        res.sendStatus(500)
    }
}

module.exports = validateUser;