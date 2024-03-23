const mongoose = require("mongoose");
const Joi = require('joi');
const {EMAIL_REGEX, PHONE_REGEX} = require("../constants");

const Schema = mongoose.Schema;



const User = new Schema({
    typ: {
        type: String,
        required: true,
        default: ['CUSTOMER'],
        enum: ['CUSTOMER', 'ADMIN', 'SECRETARY', 'DOCTOR', 'NURSE'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: EMAIL_REGEX
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
        match: PHONE_REGEX
    },
    name: String,
    surname: String,
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
    email: Joi.string().regex(EMAIL_REGEX).required(),
    password: Joi.string(),
    name: Joi.string().allow(null),
    surname: Joi.string().allow(null),
    phone: Joi.string().regex(PHONE_REGEX).required(),
    address: Joi.string().allow(null),
    city: Joi.string().allow(null),
    zip_code: Joi.string().allow(null),
    google_access_token_timestamp: Joi.date().allow(null),
    google_refresh_token: Joi.string().allow(null),
    google_refresh_token_timestamp: Joi.date().allow(null),
})


// Exports
module.exports.User = mongoose.model('User', User)
module.exports.UserSchema = joiSchema
