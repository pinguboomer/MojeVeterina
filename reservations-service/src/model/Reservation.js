const mongoose = require("mongoose");
const Joi = require('joi');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Reservation = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        required: true
    },
    date:  {
        type: Date,
        required: true,
    },
    animal: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Animal',
        required: true,
    },
    reason: {
        type: String,
        required: true,
    },
});

// JOI validation - https://gist.github.com/stongo/6359042
const joiSchema = Joi.object({
    user: Joi.string().required(), // ID user
    date: Joi.date().required(),
    animal: Joi.string().required(), // ID animal
    reason: Joi.string().required(),
})


// Exports
module.exports.Reservation = mongoose.model('Reservation', Reservation)
module.exports.ReservationSchema = joiSchema
