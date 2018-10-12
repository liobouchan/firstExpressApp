var express = require('express');
var app = express(); 

app.get('/', function (req, res) { 
       res.send('Hello this is your first Express App Running'); 
});
app.listen(3000, function () { 
          console.log('The App is Ready listening on PORT 3000!');
}); 