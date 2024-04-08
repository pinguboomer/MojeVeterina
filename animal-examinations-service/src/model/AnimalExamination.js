const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AnimalExamination = new Schema({
    created: {
        type: Date,
        required: true,
        default: new Date()
    },
    author: {
        type: ObjectId,
        required: true,
    },
    animal: {
        type: ObjectId,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: new Date()
    },
    weight: {
        type: String,
        required: false,
    },
    diagnose: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: false,
    },
    recommendation: {
        type: String,
        required: false,
    },
});

// JOI validation - https://gist.github.com/stongo/6359042
const joiSchema = Joi.object({
    author: Joi.string().hex().length(24).required(), // ObjectId
    animal: Joi.string().hex().length(24).required(), // ObjectId
    subject: Joi.string().required(),
    date: Joi.date().required(),
    weight: Joi.number().allow(null),
    diagnose: Joi.string().required(),
    text: Joi.string().allow(null),
    recommendation: Joi.string().allow(null),
})


// Exports
module.exports.AnimalExamination = mongoose.model('AnimalExamination', AnimalExamination)
module.exports.AnimalExaminationSchema = joiSchema