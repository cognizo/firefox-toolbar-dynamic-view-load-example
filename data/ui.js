/*
 * Filename: ui.js
 * Synopsis: logic for each view
 *
 */

var UI = function () {
    var self = {};
    self.foo = function () {
        $('#content').load('views/fooView.html', function () {
            console.log("content loaded!");
        });
    };

    return self;
};
