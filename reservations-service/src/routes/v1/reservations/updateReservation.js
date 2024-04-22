const {Reservation, ReservationSchema} = require("../../../model/Reservation");
const ObjectId = require('mongoose').Types.ObjectId;

async function updateReservation(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }
        const {value, error} = ReservationSchema.validate(req.body)

        if(error) {
            // console.log(error)
            return res.sendStatus(400)
        }

        const updated = await Reservation.updateOne({_id: req.params.id}, value)

        if (updated.matchedCount === 0) {
            return res.sendStatus(404)
        }

        res.sendStatus(204)
    }
    catch (e) {
        res.sendStatus(500)
    }
}

module.exports = updateReservation;