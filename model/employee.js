var mongoose = require("mongoose");

var EmployeeSchema = new mongoose.Schema({
    name: String,
    age: String,
});
 
module.exports = mongoose.model("Employee", EmployeeSchema);