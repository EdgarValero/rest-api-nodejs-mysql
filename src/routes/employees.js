const express = require('express');
const router = express.Router();
const employeesController = require('../controllers/employees.controller');


router.get('/', async (req, res, next) => {
    let employees = await employeesController.getEmployees();
    res.send(employees);
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    let employeed = await employeesController.getEmployeed(id);
    res.send(employeed[0]);
});

router.post('/', async (req, res, next) => {
    const { name, salary } = req.body;
    await employeesController.addEmployeed(name,salary);
    res.json({status: 'Employeed Saved'}); 
});

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    await employeesController.updateEmployeed(id,name,salary);
    res.json({status:'Employeed Updated'});
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    await employeesController.deleteEmployeed(id);
    res.json({status:'Employeed Deleted'});
});

module.exports = router;