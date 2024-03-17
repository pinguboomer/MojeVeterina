const {Router} = require('express');
const router = Router();

// Users
router.get('/users/:id', require('./users/getUser'))
router.get('/users', require('./users/getUsers'))
router.post('/users', require('./users/createUser'))
router.put('/users/:id', require('./users/updateUser'))
router.delete('/users/:id', require('./users/deleteUser'))

router.get('/', (req, res) => {
    res.send('Welcome to the users files API.')
})

module.exports = router;