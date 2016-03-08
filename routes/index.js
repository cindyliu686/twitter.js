var express = require('express');

//create router
var router = express.Router();
var tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  var tweets = tweetBank.list();
  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
});


router.get('/users/:name', function (req, res) {
  var name = req.params.name;
  var list = tweetBank.find({name: name});
  console.log(list);
  res.render( 'index', {title: 'Twitter.js - Posts by '+name, tweets: list } );
});




// router.get('/stylesheets/style.css', function (req, res) {
//   	res.sendFile('/Users/cindyliu/Documents/FullStackAcademy/twitter-js/public/stylesheets/style.css');
// });



module.exports = router;