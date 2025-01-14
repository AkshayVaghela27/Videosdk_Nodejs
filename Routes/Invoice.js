const express = require("express")
const auth = require("../Middleware/Auth")
const checkAdmin = require("../Middleware/CheckAdmin")
const { CreateInvoice, GetInvoice, UpdateInvoice, DeleteInvoice, GenerateInvoicePDF } = require("../Controllers/Invoice")

const router = express.Router();

router.post('/createinvoice', auth, checkAdmin, CreateInvoice)

router.get('/getinvoice',auth,GetInvoice)

router.put('/updateinvoice/:id', auth, checkAdmin, UpdateInvoice)

router.delete('/deleteinvoice/:id', auth, checkAdmin, DeleteInvoice)

router.get("/generatepdf/:id",auth,GenerateInvoicePDF)

module.exports = router;
