var mongoose = require("mongoose");

var schema = mongoose.Schema;


var commentSchema = newSchema({
	commentor: {
	type: String
	},
	body: {
	type : String
	}
});

var commentsModel = mongoose.model('commentsModel', commentSchema); 

module.exports = commentsModel