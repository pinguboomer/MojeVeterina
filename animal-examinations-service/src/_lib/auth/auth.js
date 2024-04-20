const jwt = require('jsonwebtoken');

/**
 *  @module auth
 *  @name auth
 *  @description - Middleware to check if the user is authenticated.
 *  @param {object} req - Express request object
 *  @param {object} res - Express response object
 *  @param {function} next - Express next function
 *  @returns {void}
 *  @example
 *  app.get('/protected', auth, (req, res) => {
 *    res.json({ message: 'Protected route' })
 *  })
 *  @throws {401} - Unauthorized
 *  @throws {401} - Token expired
 *  @throws {403} - Forbidden
 **/
const FETCH_URL = 'http://localhost:3004/v1/users/validate'

module.exports = async function auth(req, res, next) {
    // Check if the bearer token is present
    if (!req.headers.authorization || !req.headers.authorization?.startsWith('Bearer ')) {
        return res.sendStatus(401)
    }
    // Extract the token
    const token = req.headers.authorization.split(' ')[1]

    // Check if the token is valid
    try {
        // Attach the user to the request object
        req.user = jwt.verify(token, process.env.JWT_SECRET);

        // Check if the user is still in the database
        const result = await fetch(FETCH_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: req.user })
        });

        if (!result.ok) {
            return res.status(401).send('Token user changed')
        }

    } catch (err) { // Token expired or invalid
        if (err.name === 'TokenExpiredError') {
            return res.status(401).send('Token expired')
        }
        return res.sendStatus(403)
    }

    next()
}