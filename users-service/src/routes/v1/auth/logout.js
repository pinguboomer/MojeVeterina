const {User, UserSchema} = require("../../../model/User");
const bcrypt = require("bcrypt");
const {EMAIL_REGEX, TOKEN_COOKIE_SAME_SITE, TOKEN_COOKIE_MAX_AGE, TOKEN_COOKIE_NAME} = require("../../../constants");
const signToken = require("../../../functions/signToken");

async function logout(req, res) {
    try {
        res.cookie(TOKEN_COOKIE_NAME, '', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: TOKEN_COOKIE_SAME_SITE,
            maxAge: 0
        })
        res.sendStatus(204)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = logout;