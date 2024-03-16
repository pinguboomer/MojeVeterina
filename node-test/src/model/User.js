const mongoose = require("mongoose");
const Joi = require('joi');

const Schema = mongoose.Schema;

const User = new Schema({
    typ: {
        type: String,
        required: true,
    },
    name: String,
    surname: String,
    email: String,
    password: String,
    address: String,
    city: String,
    zip_code: String,
    google_access_token_timestamp: Date,
    google_refresh_token: String,
    google_refresh_token_timestamp: Date,
});

// JOI validation - https://gist.github.com/stongo/6359042
const joiSchema = Joi.object({
    typ: Joi.string().required(),
    name: Joi.string().allow(null),
    surname: Joi.string().allow(null),
    email: Joi.string().allow(null),
    password: Joi.string().allow(null),
    address: Joi.string().allow(null),
    city: Joi.string().allow(null),
    zip_code: Joi.string().allow(null),
    google_access_token_timestamp: Joi.date().allow(null),
    google_refresh_token: Joi.string().allow(null),
    google_refresh_token_timestamp: Joi.date().allow(null),
})


// Exports
module.exports.User = mongoose.model('User', User)
module.exports.AnimalSchema = joiSchema
