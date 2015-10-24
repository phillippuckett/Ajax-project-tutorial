$(document).ready(function () {

    ////PART ONE////

    /*Initially, the Tweet button and the character count button should 
    be hidden (CSS).*/

    /*When the user clicks on the textarea, the textarea should double 
    in size and the character count and Tweet buttons should be revealed.*/

    $('.tweet-compose').on('click', function () {
        $('div#char-count').css('visibility', 'visible');
        $('button#tweet-submit.button').css('visibility', 'visible');
        $('.tweet-compose').css('height', '5em');
    });

    /*As the user types, the character count should decrease.*/

    $('.tweet-compose').on('keyup keydown', function () {
        var composedText = $('.tweet-compose').val();

        var count = composedText.length;
        var charsRemaining = 140 - count;

        $('#char-count').text(charsRemaining);

        //When there are 10 or less characters, the character counter should 
        //turn red.

        if (charsRemaining <= 10) {
            $('#char-count').css('color', 'red');
        } else {
            $('#char-count').css('color', 'black');
        }

        //If the user puts in more than 140 characters, the tweet button 
        //should be disabled (and re-enabled when there are <= 140 chars).

        if (count >= 140) {
            //First try and think button "disabler"
            $('#tweet-submit').attr('disabled', true);
        } else {
            //and then think button "enabler".
            $('#tweet-submit').attr('disabled', false);
        }
    });

    //When the user successfully inputs characters and clicks the 
    //“Tweet” button, a new tweet should be created and added to the 
    //tweet stream in the main column, using the user’s fake profile 
    //image in the top left and username/fullname.   

    //First we click a button.  
    $('#tweet-submit').on('click', function (ev) {
        //if you click on something, after it executes the thing you clicked on, 
        //then itll move to the next thaing that has a click action. 
        //so anyhting that has a click cascading effect, 
        //and so to prevent that from happening we need to apply
        ev.preventDefault();
        //by submitting a tweet, we have to clone it 
        var tweetText = $('.tweet-compose').val();
        //        console.log(tweetText);
        //prepend it
        var tweet = $('.tweet:first').clone();
        tweet.prependTo('#stream');

        $('.tweet:first .avatar').attr('src', 'img/alagoon.jpg');
        $('.tweet:first .fullname').text('Shia Le Boouf');
        $('.tweet:first .username').text('@thebigshia');
        $('.tweet:first .tweet-text').text(tweetText);
        $('.tweet:first .num-retweets').text('0');
        $('.tweet:first .num-favorites').text('0');
        $('.tweet:first .tweet-compose').attr('placeholder', 'Reply to @thebigshia');
        //newtweet.find()
    });



    ////PART TWO////

    //The tweet actions (Reply, Retweet, etc) should only show up when you 
    //hover over that individual tweet. Otherwise, they should be hidden.

    //The Retweets/timestamp/Reply areas should also be hidden by default. 
    //These should only expand if you click on the tweet. Have the 
    //students use a jQuery animation to accomplish the reveal, 
    //similar to how it’s done on Twitter.com









    /*THE END*/
});