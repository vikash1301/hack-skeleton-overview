const express = require("express")
const router = express.Router();
const controller = require('../controller/employee');
const { catchError }= require('../catcherror');

router.get('', catchError(controller.getAll));

router.post('/addEmployee', catchError(controller.addEmp));

module.exports = router;