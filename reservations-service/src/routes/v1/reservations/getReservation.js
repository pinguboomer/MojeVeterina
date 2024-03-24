const {Reservation} = require("../../../model/Reservation");
const ObjectId = require('mongoose').Types.ObjectId;

async function getReservation(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const reservation = await Reservation.findOne({_id: req.params.id})

        if (!reservation) {
            return res.sendStatus(404)
        }

        res.status(200).json(reservation)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getReservation