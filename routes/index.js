var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "ChatCredits!", username: process.env.TWITCHUSER, oauth: process.env.OAUTH,
  template: fs.readFileSync( "template.md", "utf8" ) });
});

module.exports = router;
