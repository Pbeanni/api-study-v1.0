const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");



dotenv.config();
app.use(express.json());

//------DB connection------//
mongoose.connect(process.env.MONGO_URL).then(console.log("DB conected")).catch((err) =>console.log(err) );
//------------------------//

//-------Routes-------//
app.use("/api/user",usersRoute)
app.use("/api/auth",authRoute);
//------------------------//


app.listen("5000",() => {
    console.log("backend is running")
})