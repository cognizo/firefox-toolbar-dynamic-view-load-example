/**
 * Filename: main.js
 * Synopsis: extension entry point: UI controller
 *
 */

self.port.on("show", function onShow (uriBase) {
    var dispatcher = function (ui) {
        ui.foo();
    };

    var ui = new UI(uriBase);
    dispatcher(ui);
});
