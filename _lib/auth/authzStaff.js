
// https://www.onelogin.com/learn/authentication-vs-authorization

/**
 *  @module auth
 *  @name authzStaff
 *  @description - Middleware to check if authenticated user is staff. *Needs to be used after auth middleware.*
 *  @param {object} req - Express request object
 *  @param {object} res - Express response object
 *  @param {function} next - Express next function
 *  @returns {void}
 *  @example
 *  app.get('/protected', auth, authzStaff, (req, res) => {
 *      res.json({ message: 'Protected route'})
 *  })
 *  @throws {403} - Forbidden
 **/
export default function authzStaff (req, res, next) {
    if (!req.user.role.includes('staff')) {
        return res.sendStatus(403)
    }
    next()
}