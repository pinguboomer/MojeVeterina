const {Reservation} = require("../../../../model/Reservation");

function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

async function getReservationDate(req, res) {
    try {
        const reservations = await Reservation.find({date:{"$gte": new Date(req.params.date), "$lt": addDays(new Date(req.params.date), 1)} })

        res.status(200).json(reservations)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getReservationDate;