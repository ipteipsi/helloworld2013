var express = require('express'),
    node = require('./routes/nodes');
 
var app = express();
 
app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
});
 
app.get('/nodes', node.findAll);
app.get('/nodes/:id', node.findById);
app.post('/nodes/:id', node.addNode);
 
app.listen(8080);
console.log('Listening on port 8080...');