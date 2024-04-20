const {Router} = require('express');
const router = Router();

// Animals
router.get('/reservations/:id', require('./reservations/getReservation'))
router.get('/reservations', require('./reservations/getReservations'))
router.get('/reservations/client/:id', require('./reservations/client/getReservationsClient'))
router.get('/reservations/date/:date',  require('./reservations/date/getReservationsDate'))
router.post('/reservations', require('./reservations/createReservation'))
router.put('/reservations/:id', require('./reservations/updateReservation'))
router.delete('/reservations/:id', require('./reservations/deleteReservation'))

router.get('/', (req, res) => {
    res.send('Welcome to the reservations-service files API.')
})

module.exports = router;