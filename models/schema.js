const mongoose=require('mongoose');
const movieSchema=new mongoose.Schema({
    UserName:{type:String, required:true},
    GameUrl:{type:String,required:true},
    GameTitle:{type:String,required:true}
});
module.exports=mongoose.model('schema',movieSchema);

