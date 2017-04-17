var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('User', new Schema({ 
	name: {type : String ,unique : true, required : true, dropDups: true}, 
	password: String, 
	admin: Boolean 
}));



