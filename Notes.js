/*Website = Static
jQuery = Dynamic

Web Applications are all about data.
In an application, there are only five thigns you can do:
make, move, change, check, and delete data.*/

CRUD Method
Create POST
Reade GET
Update PUT
Delete DELETE

var ajaxParams = {
    method: 'GET'
    url: 'http://www/twitter.com/api/timeline/?user=31231/'
};

$.ajax(ajaxParams)

//Promises: allows for javascript to run while ajax does its thing. 

$.ajax(ajaxParams).then(function (dataWeAskedFor) {});

//thats ajax. Its not a lot of code.

$.ajax(ajaxParams).then(function (dataWeAskedFor) {});

https: //randomuser.me/api/0.6/?seed=phillip
    https: //api.imgur.com/3/gallery/random/random/0

    $(document).ready(function () {
            //var = selector getting the app
            var app = $('ajax-app');
            //var = tempalte that is a header that says 'jquery Ajax!'
            var header = $('<h1>jQuery Ajax!</h1>')
                //var = template that is a button that says get Data
            var getButton = $('<button>Get Data<button>')
                //var = a templae that is a butto that says clear
            var clearButton = $('<button>Clear Data<button>')
                //template for a list(ul)
            var list = $('<ul></ul>')

            //Append each of those to the DOM
            app.append(header);
            app.append(getButton);
            app.append(clearButton);
            app.append(list);

            //Listen for the data button click and fire an ajax call to
            getButton.on('click', function () {
                getData();
                
            function getData()
                    $.ajax({
                        method: 'GET',
                        url: 'https://gist.githubusercontent.com/coolaj86/e67b9131d58e22b8b585/raw/photos.json'
                    }).then(function (data) {
                        showData(data);
                    })
            })
            function showData(data){
                for(var i = 0; i < data.length; i++) {
                    var listItem = $('<li></li>');
                    var image = $('<img src"' + item.url + '"></img>');
                    
                    listItem.text(item.name);
                    listItem.append(image);
                    list.append(listItem);
                }
            }

        // //In the callback console log the data
    })