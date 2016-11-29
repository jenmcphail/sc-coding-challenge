const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const port       = process.env.PORT || 8080

// configures body parser
app.use(bodyParser.urlencoded());

//serves static assets
app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname + '/node_modules'))

//configures server
app.listen(port);
console.log('Server running on port ' + port)