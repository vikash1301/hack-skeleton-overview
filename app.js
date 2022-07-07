require('dotenv').config();
const express           = require('express')
const bodyParser        = require('body-parser')
const app               = express()


//Requiring Router
const employeeRoutes = require("./routes/index")

app.use(bodyParser.urlencoded({extended: true}));



const mongoose = require('mongoose');
const { Db } = require('mongodb');
mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));


app.use('/employee', employeeRoutes);

app.listen(4444,()=>{
    console.log("server started at 4444.")
})