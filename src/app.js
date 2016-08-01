'use strict';
// var dotenv = require('dotenv').config();
var express = require('express');
var config = require('./config.js');
var timeline = require('./mock/timeline.json');
var followers = require('./mock/followers.json');
var dms = require('./mock/dms.json');
// var twitter = require('./twitter.js')

var Twitter = require('twitter-node-client').Twitter;
var twitter = new Twitter(config.twitter);

var app = express();

//Set view engine and view directory
app.set('view engine', 'pug');
app.set('views', './views')

//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', JSON.stringify(err));
};
var success = function (data) {
    console.log('Data [%s]', data);
};

app.get('/', function(req, res){
    res.render('index', {timeline: timeline, followers: followers.users, dms: dms});
});

app.get('/timeline/:user', function(req, res){
    var user = req.params.user
    twitter.getUserTimeline({ 
            screen_name: user,
            count: '5'
        }, error, function(data){
            res.json(JSON.parse(data));
    });

});

app.get('/followers/:user', function(req, res){
    var user = req.params.user
    twitter.getCustomApiCall('/followers/list.json',{ screen_name: user, count: '5'}, error, function(data){
            res.json(JSON.parse(data));
    });

});

app.get('/dms/', function(req, res){
    twitter.getCustomApiCall('/direct_messages.json',{ count: '5'}, error, function(data){
            res.json(JSON.parse(data));
    });

});

app.get('/retweet/:id', function(req, res){
    console.log("Retweet tweet id#"+id);
});

app.get('/unretweet/:id', function(req, res){
    console.log("Unretweet tweet id#"+id);
})

app.use('/static', express.static(__dirname + '/public'));

var port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server running on port " + port);
});