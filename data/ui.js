/*
 * Filename: ui.js
 * Synopsis: logic for each view
 *
 */

var UI = function () {
    var self = {};
    self.foo = function () {
        load("views/fooView.html", function (html) {
            console.log("content loaded!");
            $('#content').html(html);
        });
    };

    var load = function load (file, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', file, true);
        xhr.onload = function (e) {
            console.log(xhr.response);
            callback(xhr.response);
        };
        xhr.send();
    };

    return self;
};
