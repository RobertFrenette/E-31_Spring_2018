const mongoose = require('mongoose');

// Hike Schema
var Hike = mongoose.model('Hike', {
  username: {type: String, required: true},
  hikename: {type: String, required: true},
  hikediff: {type: String, required: true},
  hikedesc: {type: String, required: true},
  imageurl: {type: String, required: true}
});

module.exports = {
  Hike
};
