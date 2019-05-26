const pool = require('./connection');

function fetchAllFromGlavna(){

    return new Promise(function(resolve, reject){

		pool.query('SELECT * FROM glavna;', function (err, results, fields) {
	  		if (err) {
                console.log('there is error \n: ', error);
	  			reject(err);
            }
	  		else {
                console.log('from fetchAllFromGlavna: \n', results);
	  			resolve(results);
	  		}
		});	
	});

}

module.exports = {

    fetchAllFromGlavna, 
}
