const mongoose = require("mongoose");
const Joi = require('joi');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Animal = new Schema({
    created: {
        type: Date,
        required: true,
        default: new Date()
    },
    species:  {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    birthDate: {
        type: Date,
        required: false,
    },
    deathDate: {
        type: Date,
        required: false,
    },
    owner: {
        type: ObjectId,
        required: true,
    },
});

// JOI validation - https://gist.github.com/stongo/6359042
const joiSchema = Joi.object({
    species: Joi.string().required(),
    sex: Joi.string().allow(null),
    name: Joi.string().allow(null),
    birthDate: Joi.date().allow(null),
    deathDate: Joi.date().allow(null),
    owner: Joi.string().hex().length(24).required(), // ObjectId
})


// Exports
module.exports.Animal = mongoose.model('Animal', Animal)
module.exports.AnimalSchema = joiSchema
