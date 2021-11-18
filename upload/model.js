const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const bcrypt = require('bcrypt')


 const UserSchema = new Schema({
   nom:{type :String},
   
   image:{type:String}
    
  })
 
  module.exports = users = mongoose.model(
    "uploads",UserSchema);