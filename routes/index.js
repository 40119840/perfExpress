var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/index', function(req, res, next) {


  $('#regex').click(function(){
      console.log('button clicked');
      $.ajax({url: 'test1', success:function(res){
          console.log('server response is', res);
      }});
  });


  function regexSearch() {
    var regex = /^testString/;
    var string = 'testStringAndThenSome';
    return (string.search(regex) === 0);
  }

  function sliceMatch() {
    var stringToStartWith = 'testString';
    var string = 'testStringAndThenSome';
    return (string.slice(0, stringToStartWith.length) === stringToStartWith);
  }

  function startsWith() {
    var stringToStartWith = 'testString';
    var string = 'testStringAndThenSome';
    return string.startsWith(stringToStartWith);
  }



  function iteration(func,it) {
    console.log("iterations",it);
    var times = it;

    if (func == "reg") {
      console.log("Regular expression")
      start();
      for (var i = 0; i < times; i++) {
        regexSearch();
      }
      stop();
    };

    if (func == "sliced") {
      console.log("Sliced match")
      start();
      for (var i = 0; i < times; i++) {
        regexSearch();
      }
      stop();
    };

    if (func == "start") {
      console.log("Starts With")
      start();
      for (var i = 0; i < times; i++) {
        startsWith();
      }
      stop();
    };

  }


  var startTime, interval, time;

  function start(){

    startTime = Date.now();
    console.log("timer started");

  }


  function stop(){
    time = Date.now() - startTime
    console.log("time in ms:",time);
  }



  res.render('index', { title: 'Express' });
});

module.exports = router;
