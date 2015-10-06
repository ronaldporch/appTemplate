var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/stuff', function(req, res, next){
	res.status(200).json({users:[{name: "dada5714"},{name: "detempton"}]})
})

module.exports = router;
