var express = require('express');
var router = express.Router();
var {poolPromise1} = require('../../config/db');
var model = require('../models')
var moment = require('moment');

router.post('/addCategory', async function(req, res) {
	try {
        req.body.allocations.forEach(allocation => {
            model.addBudget(allocation.uId, allocation.CatId,allocation.amount,moment().format('MM-01-YYYY'))
        });
		res.json({ message: 'Success' });
	} catch (e) {
        console.log(e);
		res.status(500).send('Error');
	}
});

router.post('/addPurchase', async function(req, res) {
	try {
        model.addPurchase(req.body.purchase.uId, req.body.purchase.CatId,req.body.purchase.description,req.body.purchase.amount)
		res.json({ message: 'Success' });
	} catch (e) {
        console.log(e);
		res.status(500).send('Error');
	}
});


router.get("/test", async function(req, res) {
    var pool = await poolPromise1
    const result = await pool.query`select * from categories`
  res.json({test: result.recordset});
});

router.get("/getCats", async function(req, res) {
    try {
        var cats = await model.getCats()
		res.json({cats});
	} catch (e) {
        console.log(e);
		res.status(500).send('Error');
	}
});

router.get("/getPurchases", async function(req, res) {
    try {
        var purchases = await model.getPurchases()
		res.json({purchases});
	} catch (e) {
        console.log(e);
		res.status(500).send('Error');
    }
});
    
    router.get("/budgetMade", async function(req, res) {
        try {
            var made = await model.isBudgetMade(req.user.uId)
            if(made.length >= 1)
                res.json({made:true})
            else
            res.json({made:false})
        } catch (e) {
            console.log(e);
            res.status(500).send('Error');
        }
});

module.exports = router;