const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const AnimalExamination = new Schema({
    author: ObjectId,
    animal: ObjectId,
    subject: String,
    date: Date,
    weight: Number,
    diagnose: String,
    text: String,
    recommendation: String,
});

// JOI validation - https://gist.github.com/stongo/6359042
const joiSchema = Joi.object({
    author: Joi.string().hex().length(24), // ObjectId
    animal: Joi.string().hex().length(24), // ObjectId
    subject: Joi.string(),
    date: Joi.date(),
    weight: Joi.number(),
    diagnose: Joi.string(),
    text: Joi.string(),
    recommendation: Joi.string(),
})


// Exports
module.exports.AnimalExamination = mongoose.model('AnimalExamination', AnimalExamination)
module.exports.AnimalExaminationSchema = joiSchema