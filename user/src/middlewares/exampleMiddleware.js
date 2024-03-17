function exampleMiddleware(req, res, next) {
    req.ownData = {
        message: "Hello from example middleware"
    }

    next()
}

module.exports = {exampleMiddleware}