const {Invoice} = require("../../../model/Invoice");
const ObjectId = require('mongoose').Types.ObjectId;

async function getInvoice(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const invoice = await Invoice.findOne({_id: req.params.id})

        if (!invoice) {
            return res.sendStatus(404)
        }

        res.status(200).json(invoice)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getInvoice;