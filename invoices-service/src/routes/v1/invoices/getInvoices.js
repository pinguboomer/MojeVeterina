const {Invoice} = require("../../../model/Invoice");

async function getInvoices(req, res) {
    try {
        const invoices = await Invoice.find({})

        res.status(200).json(invoices)
    }
    catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = getInvoices;