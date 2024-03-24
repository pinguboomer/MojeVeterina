const {Reservation, ReservationSchema} = require("../../../model/Reservation");

async function createReservation(req, res) {
    try {
        const {value, error} = ReservationSchema.validate(req.body)

        if(error) {
            return res.sendStatus(400)
        }

        const reservation = new Reservation(value)

        await reservation.save()

        res.status(201).send(reservation)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = createReservation;