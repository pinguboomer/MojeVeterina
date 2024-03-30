const {Router} = require('express');
const router = Router();

/** Unauthorized */
// Auth
router.post('/auth/login', require('./auth/login'));


/** Authorized */
// Auth
router.post('/auth/logout', require('./auth/login'));
router.post('/auth/google/callback', require('./auth/googleCallback'));

// Users
router.get('/users/:id', require('./users/getUser'))
router.get('/users', require('./users/getUsers'))
router.post('/users', require('./users/createUser'))
router.put('/users/:id', require('./users/updateUser'))
router.put('/users/password', require('./users/changePassword'))
router.delete('/users/:id', require('./users/deleteUser'))

router.get('/', (req, res) => {
    res.send('Welcome to the users files API.')
})

module.exports = router;