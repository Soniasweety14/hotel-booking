const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const listingSchema = new Schema({
     title:{
          type : String,
          required :true,
     },
     descrption:String,
     image : {
          type:String,
          default:"https://unsplash.com/photos/a-window-with-a-curtain-and-some-paper-stars-hanging-from-it-OQLQNNmxBLg",
          set :(v)=> v === ""?"https://unsplash.com/photos/a-window-with-a-curtain-and-some-paper-stars-hanging-from-it-OQLQNNmxBLg":v,
     },
     price : Number,
     location :String,
     country :String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;