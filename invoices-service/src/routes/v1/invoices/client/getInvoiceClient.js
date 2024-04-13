const {Invoice} = require("../../../../model/Invoice");
const ObjectId = require('mongoose').Types.ObjectId;

async function getInvoiceClient(req, res) {
    try {
        if(!ObjectId.isValid(req.params.id)) {
            return res.sendStatus(400)
        }

        const invoices = await Invoice.find({client: req.params.id})

        res.status(200).json(invoices)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getInvoiceClient;