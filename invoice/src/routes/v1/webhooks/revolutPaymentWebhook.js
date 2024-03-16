const {Invoice} = require("../../../model/Invoice");
const ObjectId = require('mongoose').Types.ObjectId;

module.exports = async function revolutPaymentWebhook(req, res) {
    // TODO check Revolut signature
    /*if (req.body.headers['Revolut-Signature'] !== process.env.REVOLUT_SIGNATURE) {   // process.env.REVOLUT_SIGNATURE
        return res.sendStatus(403)
    }*/

    const content = JSON.parse(req.body.content)

    await Invoice.updateOne({transactionId: content.order_id}, {paid: true})

    res.sendStatus(204)
}
