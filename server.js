var express = require('express')
,	cors = require('cors')
,	mongoose = require('mongoose')
,	bodyParser = require('body-parser')
,   port = 3000
,   secrets = require('./secrets.js')
,   mongoose = require('mongoose')
,   mongooseUri = secrets.mongooseUri
,   app = express();

app.use(bodyParser.json());
app.use(cors());
// app.use(express.static(__dirname + '/public'));

//EXERCISES//

//ROUTINES//

//USERS//




app.listen(port, function() {
   console.log('listening on port', port); 
});
mongoose.connect(mongooseUri);
mongoose.connection.once('open', function() {
	console.log("Connected to MongoDB");
});

    