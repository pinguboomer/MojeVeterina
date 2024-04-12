const mongoose = require("mongoose");
const Joi = require('joi');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const InvoiceItem = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    }
});
//TODO datum splatnosti
const Invoice = new Schema({
    number: {
        type: Number,
        required: true,
    },
    client: {
        type: ObjectId,
        required: true,
    },
    animal: {
        type: ObjectId
    },
    paid:  {
        type: Boolean,
        default: false,
    },
    transactionId: String,
    transactionPublicId: String,
    creationDate:  {
        type: Date,
        required: true,
        default: new Date()
    },
    items:{
        type: [InvoiceItem]
    }

});



// JOI validation
const joiInvoiceItemSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    quantity: Joi.number().required(),
})

const joiSchema = Joi.object({
    client: Joi.string().hex().length(24).required(),
    animal: Joi.string().hex().length(24).allow(null),
    items: Joi.array().items(joiInvoiceItemSchema).required()
})



// Exports
module.exports.Invoice = mongoose.model('Invoice', Invoice)
// module.exports.InvoiceItem = mongoose.model('InvoiceItem', Invoice)
module.exports.InvoiceSchema = joiSchema
module.exports.InvoiceItemSchema = joiInvoiceItemSchema