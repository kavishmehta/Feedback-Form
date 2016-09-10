var express = require('express');
var reload = require('reload');
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', 'app/views');	//dir of view file

app.use(express.static('app/public'));
app.use(require('./routes/feedback.js'));
app.use(require('./routes/api.js'));

var server = app.listen(app.get('port'), function(){
	console.log('Go to: localhost:'+app.get('port'));
});

reload(server, app);