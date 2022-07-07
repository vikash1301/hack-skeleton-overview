const employeeModel = require('../model/employee');

async function getAll(req, res) {
   const allEmployee = await employeeModel.find({}).lean();

   res.status(200).send({
       data:allEmployee,
       message:'all employee fetched successfully'
   });
}

async function addEmp(req, res) {
    const emp = {
        name:'vikash',
        age:'24'
    };
    await employeeModel.create(emp);
 }

module.exports.getAll = getAll