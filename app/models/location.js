var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('LocationInfo', new Schema({ 
	place: {type : String , dropDups: true}, 
	longtitude:String, 
	lattitude: String,
    username: String
}));