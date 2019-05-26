const express = require('express');
const app = express();
const router = express.Router();

app.use('/api', router);

const connection = require('./fetch');

router.get('/bitcoin', (req, res) => {

     connection.fetchAllFromGlavna()

     .then(dataset => {

         dataset.map((item, counter) => {
             
            console.log('NOVI DAN !!!! \n');
            for (let index = 1; index < 25; index++) {
                
                console.log('vrednost za svaki sat: \n', item[index]);
1               
            }
             //console.log('dan po dan: \n', item[ounter]);

         })
         res.setHeader('Access-Control-Allow-Origin:', '*')
         res.status(200).json(dataset);
     })
})
app.listen(3001, () => console.log('Example app listening on port 3001!'));

