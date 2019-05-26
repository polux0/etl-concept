const express = require('express');
const app = express();
const router = express.Router();

app.use('/api', router);

const connection = require('./queries');

router.get('/direct', (req, res) => {

    res.status(200).json('Everything is all right');
 
})

router.get('/bitcoin', (req, res) => {
     connection.getUncompletedOrdersEthereum()
     .then(dataset => {
         console.log('dataset: \n', dataset);
     })
})
app.listen(3001, () => console.log('Example app listening on port 3001!'));

