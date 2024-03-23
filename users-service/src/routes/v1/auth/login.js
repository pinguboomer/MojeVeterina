const {User, UserSchema} = require("../../../model/User");
const bcrypt = require("bcrypt");
const {EMAIL_REGEX, TOKEN_COOKIE_SAME_SITE, TOKEN_COOKIE_MAX_AGE, TOKEN_COOKIE_NAME} = require("../../../constants");
const signToken = require("../../../functions/signToken");

async function login(req, res) {
    try {
        const {email, password, extend} = req.body

        // Neplatný email nebo heslo
        if (typeof email !== 'string' || typeof password !== 'string' || !email.match(EMAIL_REGEX)) {
            return res.sendStatus(400)
        }

        const user = await User.findOne({email}).lean()

        // Uživatel neexistuje nebo heslo nesouhlasí
        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.sendStatus(403)
        }

        // Vytvoření a odeslání tokenu
        delete user.password

        const token = signToken(user, !!extend)

        // res.cookie(TOKEN_COOKIE_NAME, token, {
        //     httpOnly: true,
        //     secure: process.env.NODE_ENV === 'production',
        //     sameSite: TOKEN_COOKIE_SAME_SITE,
        //     maxAge: TOKEN_COOKIE_MAX_AGE
        // })
        res.status(200).send({token})
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = login;