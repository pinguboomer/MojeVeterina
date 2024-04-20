const axios = require('axios');
const {InvoiceSchema, Invoice,} = require("../../../model/Invoice");
const {INVOICE_NUMBER_COUNTER} = require("../../../constants");
const {getCounterValue} = require("../../../model/Counter");

async function createInvoice(req, res) {
    try {
        // Validation
        const {value, error} = InvoiceSchema.validate(req.body)

        if (error) {
            console.error(error);
            return res.sendStatus(400)
        }

        // Create invoices-service document
        const invoice = new Invoice(value);
        invoice.number = await getCounterValue(INVOICE_NUMBER_COUNTER);

        // Count total price for Revolut
        let totalPrice = 0;
        value.items.forEach((item) => {
            totalPrice += item.price;
        });
        totalPrice = totalPrice * 100;


        //region Create order in Revolut
        let data = JSON.stringify({
            "amount": totalPrice,
            "currency": "CZK"
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: process.env.REVOLUT_API_URL + '/orders',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + process.env.REVOLUT_SECRET_KEY
            },
            data: data
        };

        try {
            const response = await axios(config)
            console.log(JSON.stringify(response.data));

            invoice.transactionId = response.data.id;
            invoice.transactionPublicId = response.data.public_id;

            await invoice.save();
            res.status(200).send(invoice);
        }
        catch (e) {
            console.error(e);
            res.sendStatus(500);
        }

    } catch (e) {
        console.error(e)
        res.sendStatus(500)
    }
}

module.exports = createInvoice;