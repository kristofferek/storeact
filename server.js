const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
const bodyParser = require('body-parser');

const app = express();

let db;

app.use(bodyParser.json());

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get('/api/items/:category', function(req, res) {
	let cat = req.params.category;
	let q = {category: cat};
	if (cat === "all") { q = {};}
    db.collection("items").find(q).toArray(function(err, docs) {
      res.json(docs);
    });
});

app.get('/api/search/:term', function(req, res) {
	let term = req.params.term;
  //Get all items where it's category or name contains search term.
	let q = {
    $or: [
      {category: {'$regex' : term, '$options' : 'i'}},
      {name: {'$regex' : term, '$options' : 'i'}},
      {brand: {'$regex' : term, '$options' : 'i'}}
    ]
  };
	if (term === "all") { q = {};}
    db.collection("items").find(q).toArray(function(err, docs) {
      res.json(docs);
    });
});

app.get('/api/item/:id', function(req, res) {
    db.collection("items").find({_id: ObjectId(req.params.id)}).limit(1).next(function(err, docs) {
      res.json(docs);
    });
});


MongoClient.connect('mongodb://localhost/storeact', function(err, dbConnection) {
  db = dbConnection;
  app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
  });
});
