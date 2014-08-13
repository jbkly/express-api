var express = require('express');
var app = express();

var port = process.env.PORT || 8000;

var router = express.Router();

// default route: local time
router.get('/', function(req, res) {
  var now = new Date();
  res.json({'Local Time': now});
});

// second route: greeting for name passed as param in URL
router.get('/:name', function(req, res) {
  res.json({'Message': 'Why hello ' + req.params.name + '!'});
});

// register routes - all will be prefixed with /api
app.use('/', router);

// start the server
app.listen(port);
console.log('Server running on port ' + port);
