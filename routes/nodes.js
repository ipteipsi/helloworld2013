var nano    = require('nano')('http://127.0.0.1:5984')
  , db      = nano.use("psi");


exports.findById = function(req, res) {
    var id = req.params.id;
    console.log('Retrieving node: ' + id);
    db.get(id).pipe(res);
};

exports.findAll = function(req, res) {
    db.get("_all_docs").pipe(res);
};

exports.addNode = function(req, res) {
  var id = req.params.id;
  var node = req.body;
  console.log('Adding node: ' + JSON.stringify(node));
  db.insert(node, id, function(err, body) {
    res.send(body);
  });
};