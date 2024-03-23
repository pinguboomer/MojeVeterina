
// https://www.onelogin.com/learn/authentication-vs-authorization

/**
 *  @module auth
 *  @name authzRole
 *  @description - Middleware to check if authenticated users-service has a specific role. *Needs to be used after auth middleware.*
 *  @param {object} req - Express request object
 *  @param {object} res - Express response object
 *  @param {function} next - Express next function
 *  @returns {function} - Returns a function that checks if the users-service is staff
 *  @example
 *  app.get('/protected', auth, authzStaff, (req, res) => {
 *      res.json({ message: 'Protected route'})
 *  })
 *  @throws {403} - Forbidden
 **/
export default function authzRole(req, res, next) {
    /**
     * @function
     * @name checkRole
     * @description - Checks if the users-service is staff
     * @param {string | [string]} roles - Roles to check
     * @returns {void}
     **/
    return (roles) => {
        if (typeof roles === 'string') {
            roles = [roles]
        }

        for (let role of roles) {
            if (!req.user.role.includes(role)) {
                return res.sendStatus(403)
            }
        }

        next()
    }
}