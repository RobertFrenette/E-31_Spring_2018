var mongoose = require('mongoose');
 
var MountainSchema = new mongoose.Schema({
    name: String,
    elev: String,
    desc: String
});
 
module.exports = mongoose.model('Mountain', MountainSchema);
