var express = require('express');

var app = express();

// same as `static` folder, `public` is another common static resource folder name
app.use('/', express.static('public'));

// as we use port 3000 at `sample-angularjs` project, we use 3001 at here
app.listen(3001);