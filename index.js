const express = require("express");
const bodyParser = require("body-parser");
const getArea = require('./area.js');

var app = express();
var router = express.Router();
var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function (req, res) {
    res.json({message: 'welcome to the area calculator 3000!'});    
});

router.route('/getArea')
    .get(function (req, res) {
        console.log('GET');
        //todo
    })

app.use('/api', router);

app.listen(port, function () {
    console.log('App listening on port '+ port);
});
    