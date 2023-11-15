const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing= require("../hotel-booking/models/listing.js");
const path = require("path");

const MONGO_URL="mongodb://127.0.0.1:27017/hotel";
main()
     .then(()=>{
          console.log("connected to DB");
     })
     .catch((err)=>{
          console.log(err);
     });

async function main(){
     await mongoose.connect(MONGO_URL);
}

app.set("view engine","ejs");
app.set("views",path.join(__dirname ,"views"));

app.get("/",(req, res)=>{
     res.send("hlo, my name is sonia");
});

// indexroute
app.get("/listings", async (req , res)=>{
     const allListings = await Listing.find({});
     res.render("listings/index.ejs",{allListings});
});

// app.get("/testListing", async (req,res) =>{
//      let sampleListing = new Listing({
//           title:"My new villa",
//           descrption :"by beach",
//           price:1200,
//           location :"goa , delhi",
//           country :"India",
//      })
//      await sampleListing.save()
//      console.log("Sample was saved");
//      res.send("Successful testing");
// });

app.listen(8080,()=>{
     console.log("Server is listening to port 5550");
});