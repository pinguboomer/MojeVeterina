const mongoose = require("mongoose");
const Joi = require('joi');
const {EMAIL_REGEX, PHONE_REGEX} = require("../constants");

const Schema = mongoose.Schema;



const User = new Schema({
    role: {
        type: String,
        required: true,
        default: 'CUSTOMER',
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
    role: Joi.string(),
    email: Joi.string().regex(EMAIL_REGEX).required(),
    password: Joi.string(),
    name: Joi.string().required(),
    surname: Joi.string().required(),
    phone: Joi.string().regex(PHONE_REGEX).required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    zip_code: Joi.string().required(),
})


// Exports
module.exports.User = mongoose.model('User', User)
module.exports.UserSchema = joiSchema
