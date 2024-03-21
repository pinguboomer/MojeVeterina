const {Router} = require('express');
const router = Router();



// Animals
router.get('/invoices/:id', require('./invoices/getInvoice'));
router.post('/invoices', require('./invoices/createInvoice'));
router.get('/invoices', require('./invoices/getInvoices'));
router.post('/webhooks/revolut', require('./webhooks/revolutPaymentWebhook'));

router.get('/', (req, res) => {
    res.send('Welcome to the invoices-service API.')
})

module.exports = router;