const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://gousebmi:bmigouse@bmi.iuv0h.mongodb.net/notesDB?retryWrites=true&w=majority",{ useNewUrlParser: true , useUnifiedTopology: true } );

//require route
app.use("/" , require("./routes/noteRoute"));

app.listen(3001,function(){
    console.log("Express server running on port 3001");
})