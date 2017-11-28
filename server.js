(function() {
    var express = require('express');

    var app = express();

    var port = 3000;

    app.use('/', express.static(__dirname + '/public'));
    app.listen(7000);

    console.log("Magic happens at " + 7000);

})();