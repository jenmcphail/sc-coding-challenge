const express    = require('express');
const app        = express();
const bodyParser = require('body-parser');
const port       = process.env.PORT || 8080

// configures body parser
app.use(bodyParser.urlencoded());

//configures server
app.listen(port);
console.log('Server running on port' + port)