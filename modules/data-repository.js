var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';

module.exports = (req, res, next) => {

    MongoClient.connect(url, function(err, db) {
        assert.equal(null, err);
        insertItemState(db, function() {
            db.close();
        });
    });
}

var insertItemState = function(db, callback) {
    db.collection('restaurants').insertOne({
        "meta": {
            "client-id": 1,
            "room-id": 1
        },
        "data": [{
            "type": "window",
            "id": 1,
            "attributes": {
                "date-time": "January 1, 1970, 00:00:00",
                "temp": 35,
                "light": .5
            }
        }]
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the restaurants collection.");
        callback();
    });
};
