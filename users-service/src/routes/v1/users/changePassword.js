const {User, UserSchema} = require("../../../model/User");
const bcrypt = require("bcrypt");
const {EMAIL_REGEX, TOKEN_COOKIE_SAME_SITE, TOKEN_COOKIE_MAX_AGE, TOKEN_COOKIE_NAME} = require("../../../constants");
const signToken = require("../../../functions/signToken");

async function changePassword(req, res) {
    try {
        const {email, password, newPassword} = req.body


        //Ověříme, jestli upravuje sám sebe.
        if (!req.user.role.includes('ADMIN')) {
            if (email != req.user.email) {
                return res.sendStatus(403)
            }
        }


        // Neplatný email nebo heslo
        if (typeof email !== 'string' || typeof password !== 'string' || typeof newPassword !== 'string' || !email.match(EMAIL_REGEX)) {
            return res.sendStatus(400)
        }

        const user = await User.findOne({email}).lean()

        // Uživatel neexistuje nebo heslo nesouhlasí
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.sendStatus(403)
        }

        // Zahashování nového hesla a uložení do DB
        const hashPassword = bcrypt.hashSync(newPassword, 12);

        const queryRes = await User.updateOne({_id: user._id}, {password: hashPassword})

        if (queryRes.matchedCount === 0) {
            return res.sendStatus(500)
        }

        res.sendStatus(204)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = changePassword;