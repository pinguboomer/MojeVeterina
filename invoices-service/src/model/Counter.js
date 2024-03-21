const mongoose = require("mongoose");
const Joi = require('joi');
const {INVOICE_NUMBER_COUNTER} = require("../constants");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CounterSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    seq_value: {
        type: Number,
        required: true,
        default: 1
    }
});
const Counter = mongoose.model('Counter', CounterSchema)


// Exports
module.exports.Counter = Counter

module.exports.createCounter = async function createCounter(counterName, defaultValue) {
    if (!await Counter.exists({name: counterName})) {
        return
    }

    try {
        const invoiceCounter = new Counter({name: counterName, seq_value: defaultValue})
        await invoiceCounter.save()
    }
    catch (e) {
        throw e
    }
}

module.exports.getCounterValue = async function getCounterValue(counterName) {
    const counter = await Counter.findOneAndUpdate({name: counterName}, {$inc: {seq_value: 1}}, {returnNewDocument: true, upsert: true})
    return counter.seq_value
}