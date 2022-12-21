const mongoose =require("mongoose");
var Schema = mongoose.Schema;

var CommentsSchema = Schema({
    content:String,
    date: {type:Date, default: Date.now},
    user: {type:Schema.ObjectId, ref:"Usuario"}
});

var Comment = mongoose.model("Coment", CommentsSchema);

var TopicSchema = Schema({
    title: String,
    content:String,
    code:String,
    lang:String,
    date: {type:Date, default: Date.now},
    user: {type:Schema.ObjectId, ref:"Usuario"},
    Comments:[CommentsSchema]
})

module.exports = mongoose.model("Topic", TopicSchema);