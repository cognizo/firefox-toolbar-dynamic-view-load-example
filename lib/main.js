var data = require("sdk/self").data;

var panel = require("sdk/panel").Panel({
    width: 512,
    height: 300,
    contentURL: data.url("main.html"),
    contentScriptFile: [
        data.url('vendor/jquery-2.0.2.min.js'),
        data.url('ui.js'),
        data.url('main.js')
    ]
});

require("sdk/widget").Widget({
    label: "Thing!",
    id: "cats-toolbar",
    contentURL: "http://www.mozilla.org/favicon.ico",
    panel: panel
});

panel.on("show", function() {
    console.log("SHOWING");
    panel.port.emit("show");
});
