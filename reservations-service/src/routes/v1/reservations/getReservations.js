const {Reservation} = require("../../../model/Reservation");

async function getReservation(req, res) {
    try {
        const reservations = await Reservation.find({})

        res.status(200).json(reservations)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getReservation;