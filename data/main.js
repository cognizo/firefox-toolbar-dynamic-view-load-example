/**
 * Filename: main.js
 * Synopsis: extension entry point: UI controller
 *
 */

self.port.on("show", function onShow () {
    var dispatcher = function (ui) {
        ui.foo();
    };

    var ui = new UI();
    dispatcher(ui);
});
