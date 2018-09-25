var express = require('express');
var router = express.Router();
var {poolPromise1} = require('../../config/db');
var functions = require('../models')

router.post('/supportTicket', async function(req, res) {
	try {
        req.body.allocations.forEach(allocation => {
            functions.addBudget(allocation.id, allocation.catId,allocation.amount,allocation.month)
        });
		res.json({ message: 'Success' });
	} catch (e) {
		res.status(500).send('Error');
	}
});


router.get("/test", async function(req, res) {
    var pool = await poolPromise1
    const result = await pool.query`select * from categories`
  res.json({test: result.recordset});
});

module.exports = router;