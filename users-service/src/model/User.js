const mongoose = require("mongoose");
const Joi = require('joi');
const {EMAIL_REGEX, PHONE_REGEX} = require("../constants");

const Schema = mongoose.Schema;



const User = new Schema({
    role: {
        type: String,
        required: true,
        default: 'CUSTOMER',
        enum: ['CUSTOMER', 'ADMIN'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: EMAIL_REGEX
    },
    password: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
        match: PHONE_REGEX
    },
    name: {
        type: String,
        required: false,
    },
    surname: {
        type: String,
        required: false,
    },
    address: {
        type: String,
        required: false,
    },
    city: {
        type: String,
        required: false,
    },
    zip_code: {
        type: String,
        required: false,
    },
    google_id: {
        type: String,
        required: false,
    },
});

// JOI validation - https://gist.github.com/stongo/6359042
const joiSchema = Joi.object({
    email: Joi.string().regex(EMAIL_REGEX).required(),
    password: Joi.string(),
    name: Joi.string().allow(null),
    surname: Joi.string().allow(null),
    phone: Joi.string().regex(PHONE_REGEX).allow(null),
    address: Joi.string().allow(null),
    city: Joi.string().allow(null),
    zip_code: Joi.string().allow(null),
    role: Joi.string().valid('CUSTOMER', 'ADMIN'),
})


// Exports
module.exports.User = mongoose.model('User', User)
module.exports.UserSchema = joiSchema
