var config = require('./config.js');

//Callback functions
    var error = function (err, response, body) {
        console.log('ERROR [%s]', JSON.stringify(err));
    };
    var success = function (data) {
        console.log('Data [%s]', data);
    };

    var Twitter = require('twitter-node-client').Twitter;

    //Get this data from your twitter apps dashboard
    // var config = {
    //     "consumerKey": config.CONSUMER_KEY,
    //     "consumerSecret": config.CONSUMER_SECRET,
    //     "accessToken": config.ACCESS_TOKEN,
    //     "accessTokenSecret": config.ACCESS_TOKEN_SECRET,
    //     "callBackUrl": config.CALL_BACK_URL
    // }

    var twitter = new Twitter(config.twitter);

    //Example calls

    // twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);

    // twitter.getMentionsTimeline({ count: '10'}, error, success);

    // twitter.getHomeTimeline({ count: '10'}, error, success);

    // twitter.getReTweetsOfMe({ count: '5'}, error, success);

    // twitter.getTweet({ id: '1111111111'}, error, success);


    //
    // Get 10 tweets containing the hashtag haiku
    //

    // twitter.getSearch({'q':'#haiku','count': 10}, error, success);

    // //
    // // Get 10 popular tweets with a positive attitude about a movie that is not scary 
    // //

    // twitter.getSearch({'q':' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type':'popular'}, error, success);

module.exports = twitter;