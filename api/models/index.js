var sql = require('mssql');
const { poolPromise1 } = require('../../config/db');

var index = {
	addBudget: async function(id,catId,amount,month) {
        return new Promise(async function(resolve, reject) {
            const pool = await poolPromise1;
                const result = await pool
                    .request()
                    .input('uId', sql.Int, id)
                    .input('catId', sql.Int, catId)
                    .input('amount', sql.Float, amount)
                    .input('month', sql.Date, month)
                    .execute('insertBudgetAllocations');
                if (result) resolve(result);
                else reject(err);
            });
    },
    addPurchase: async function(uid,catId,description,amount) {
        return new Promise(async function(resolve, reject) {
            const pool = await poolPromise1;
                const result = await pool
                    .request()
                    .input('uId', sql.Int, uid)
                    .input('catId', sql.Int, catId)
                    .input('description', sql.Text, description)
                    .input('amount', sql.Float, amount)
                    .execute('insertPurchase');
                if (result) resolve(result);
                else reject(err);
            });
    },

    getCats: async function() {
        return new Promise(async function(resolve, reject) {
            const pool = await poolPromise1;
                const result = await pool
                    .request()
                    .input('uId', sql.Int, 1)
                    .execute('getUserCategories');
                if (result) resolve(result.recordset);
                else reject(err);
            });
    },
    getPurchases: async function() {
        return new Promise(async function(resolve, reject) {
            const pool = await poolPromise1;
                const result = await pool
                    .request()
                    .input('uId', sql.Int, 1)
                    .execute('getMonthlyTransactions');
                if (result) resolve(result.recordset);
                else reject(err);
            });
    },

    isBudgetMade: async function(id) {
        return new Promise(async function(resolve, reject) {
            const pool = await poolPromise1;
                const result = await pool
                    .request()
                    .input('uId', sql.Int, 1)
                    .execute('selectBudgetAllocationsById');
                if (result) resolve(recordset);
                else reject(err);
            });
    }
}
    
 module.exports = index;