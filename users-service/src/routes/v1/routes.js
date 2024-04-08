const {Router} = require('express');
const auth = require("../../_lib/auth/auth");
const authzRole = require("../../_lib/auth/authzRole");
const router = Router();

/** Unauthorized */
// Auth
router.post('/auth/login', require('./auth/login'));
router.post('/auth/google/callback', require('./auth/googleCallback'));

// Users
router.post('/users', require('./users/createUser'))

/** Authorized */
router.use(auth)

// Auth
router.post('/auth/logout', require('./auth/login'));

// Users
router.get('/users/:id', authzRole(['ADMIN', 'SECRETARY', 'DOCTOR', 'NURSE']), require('./users/getUser'))
router.get('/users', authzRole(['ADMIN', 'SECRETARY', 'DOCTOR', 'NURSE']), require('./users/getUsers'))
router.put('/users/:id', authzRole(['ADMIN', 'SECRETARY', 'DOCTOR', 'NURSE']),  require('./users/updateUser'))
router.put('/users/password', require('./users/changePassword'))
router.delete('/users/:id', authzRole(['ADMIN', 'SECRETARY', 'DOCTOR', 'NURSE']), require('./users/deleteUser'))

module.exports = router;