const {Router} = require('express');
const router = Router();



// Animals
//TODO dodělat put a delete
router.get('/invoices/:id', require('./invoices/getInvoice'));
router.post('/invoices', require('./invoices/createInvoice'));
router.get('/invoices', require('./invoices/getInvoices'));
router.get('/invoices/client/:id', require('./invoices/client/getInvoiceClient'))
router.post('/webhooks/revolut', require('./webhooks/revolutPaymentWebhook'));

router.get('/', (req, res) => {
    res.send('Welcome to the invoices-service API.')
})

module.exports = router;