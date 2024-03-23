const jwt = require('jsonwebtoken');

/**
 * Function to sign a token
 * @param {Object} payload - The payload to sign
 * @param {Boolean} extended - Whether to extend the token validity
 * @returns {String} The signed token
 * @throws {Error} If the token cannot be signed
 **/
module.exports = function signToken(payload, extended = false) {
    // Sign the token
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: extended? '1d' : '1h'});
}