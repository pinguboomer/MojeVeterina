
// https://www.onelogin.com/learn/authentication-vs-authorization

/**
 *  @module auth
 *  @name authzRole
 *  @description - Middleware to check if authenticated users-service has a specific role. *Needs to be used after auth middleware.*
 *  @param {string | [string]} roles - Roles to check
 *  @returns {function} - Returns a function that checks if the users-service is staff
 *  @example
 *  app.get('/protected', auth, authzStaff, (req, res) => {
 *      res.json({ message: 'Protected route'})
 *  })
 *  @throws {403} - Forbidden
 **/
module.exports = function authzRole(roles) {
    /**
     * @function
     * @name checkRole
     * @description - Checks if the users-service is staff
     * @param {object} req - Express request object
     * @param {object} res - Express response object
     * @param {function} next - Express next function
     * @returns {void}
     **/
    return (req, res, next) => {
        if (typeof roles === 'string') {
            roles = [roles]
        }

        for (let role of roles) {
            if (!req.user.role === role) {
                return res.sendStatus(403)
            }
        }

        next()
    }
}