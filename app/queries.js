const pool = require('./connection');

function getUncompletedOrdersEthereum(){

    return new Promise(function(resolve, reject){

		pool.query('SELECT adress_to FROM kilotest.eth_orders WHERE fullfiled = 0 limit 1000;', function (err, rows, fields) {
	  		if (err) {
	  			reject(err);
            }
            if(rows == null){
                reject ('There are no uncomplete ethereum orders');
            }
	  		else {
	  			resolve(rows);
	  		}
		});	
	});

}
function getCompletedOrdersEthereum(){

    return new Promise(function(resolve, reject){

		pool.query('SELECT * FROM kilotest.btc_orders WHERE fullfiled = 1 limit 1000;', function (err, rows, fields) {
	  		if (err) {
	  			reject(err);
            }
            if(rows == null){
                reject ('There are no completed ethereum orders');
            }
	  		else {
	  			resolve(rows);
	  		}
		});	
	});

}
function getUncompletedOrdersBitcoin(){

    return new Promise(function(resolve, reject){

		pool.query('SELECT address_to FROM kilotest.btc_orders WHERE fullfilled = 0 limit 1000;', function (err, rows, fields) {
	  		if (err) {
	  			reject(err);
            }
            if(rows = null){
                reject ('There are no uncomplete bitcoin orders');
            }
	  		else {
                console.log('from getUncompletedOrdersBitcoin: \n', rows);
	  			resolve(rows);
	  		}
		});	
	});

}
function getCompletedOrdersBitcoin(){
    
    return new Promise(function(resolve, reject){

		pool.query('SELECT * FROM kilotest.btc_orders WHERE fullfilled = 1 limit 1000;', function (err, rows, fields) {
	  		if (err) {
	  			reject(err);
            }
            if(rows = null){
                reject ('There are no complete bitcoin orders');
            }
	  		else {
	  			resolve(rows[0].address_to);
	  		}
		});	
	});


}
function getEthereumOrderIdByAddress(address){

    return new Promise(function(resolve, reject){

		pool.query('SELECT order_id from kilotest.eth_orders WHERE adress_to = ? limit 1000;', [address], function (err, rows, fields) {
	  		if (err) {
	  			reject(err);
	  		}
	  		else {
                console.log('rows \n', rows);
	  			resolve(rows);
	  		}
		});	
	});

}
function getEthereumOrderByAddress(address){
    
    return new Promise(function(resolve, reject){

		pool.query('SELECT * from kilotest.eth_orders WHERE adress_to = ? limit 1000;', [address], function (err, rows, fields) {
	  		if (err) {
	  			reject(err);
	  		}
	  		else {
                console.log('rows \n', rows);
	  			resolve(rows);
	  		}
		});	
	});
}
function getBitcoinOrderIdByAddress(address){

    return new Promise(function(resolve, reject){

		pool.query('SELECT order_id FROM kilotest.btc_orders WHERE address_to = ? limit 1000;', [address], function (err, rows, fields) {
	  		if (err) {
	  			reject(err);
	  		}
	  		else {
	  			let uniqueEthereumAddressId = rows[0].wallet_id;
	  			let unique = Object.create(null);
	  			unique.wallet_id = rows[0].wallet_id;
	  			unique.wallet_address = rows[0].wallet_address;
	  			resolve(unique);
	  		}
		});	
	});
 
}
function updateOrderToCompleteEthereumByOrderID(id){
    
    return new Promise(function(resolve, reject){
        
        pool.query('UPDATE kilotest.eth_orders SET fullfiled = 1 WHERE order_id = ?;',[id], function (err, rows, fields) {
            if (err) {
                reject(err);
            }
            else {
                let uniqueEthereumAddressId = rows[0].wallet_id;
                let unique = Object.create(null);
                unique.wallet_id = rows[0].wallet_id;
                unique.wallet_address = rows[0].wallet_address;
                resolve(unique);
            }
        });

  });
}
function updateOrderToCompleteEthereumByAddress(address){

    return new Promise(function(resolve, reject){
        
        pool.query('UPDATE kilotest.eth_orders SET fullfiled = 1 WHERE adress_to = ?;',[address], function (err, rows, fields) {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });

  });

}
function updateOrderToCompleteBitcoinByOrderID(id){

    return new Promise(function(resolve, reject){
        
        pool.query('UPDATE kilotest.btc_orders SET fullfilled = 1 WHERE order_id = ? ;',[id], function (err, rows, fields) {
            if (err) {
                reject(err);
            }
            else {
                let uniqueEthereumAddressId = rows[0].wallet_id;
                let unique = Object.create(null);
                unique.wallet_id = rows[0].wallet_id;
                unique.wallet_address = rows[0].wallet_address;
                resolve(unique);
            }
        });

  });
}
function updateOrderToCompleteBitcoinByAddress(address){
    
    return new Promise(function(resolve, reject){
        
        pool.query('UPDATE kilotest.btc_orders SET fullfiled = 1 WHERE address_to = ?;',[address], function (err, rows, fields) {
            if (err) {
                reject(err);
            }
            else {
                resolve(rows);
            }
        });

  });

}
module.exports = {

    getUncompletedOrdersBitcoin, 
    getUncompletedOrdersEthereum,
    getCompletedOrdersEthereum,
    getCompletedOrdersBitcoin,
    getBitcoinOrderIdByAddress,
    getEthereumOrderIdByAddress,
    getEthereumOrderByAddress, 
    updateOrderToCompleteBitcoinByOrderID,
    updateOrderToCompleteEthereumByOrderID,
    updateOrderToCompleteEthereumByAddress,
    updateOrderToCompleteBitcoinByAddress

}
