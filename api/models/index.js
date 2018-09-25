var sql = require('mssql');
const { poolPromise1 } = require('../../config/db');

var index = {
	addBuget: async function(id,catId,amount,month) {
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
    }
}
    
 module.exports = index;