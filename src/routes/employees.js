const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

router.get('/', async (req, res, next) => {
    await mysqlConnection.query('SELECT * FROM employees', (error, results, fields) => {
        if(!error) {
            res.json(results);
        } else {
            console.log(err);
        }
    });
});

router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    await mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (error, results, fields) => {
        if(!error) {
            res.json(results[0]);
        } else {
            console.log(error);
        }
    });
});

router.post('/', async (req, res, next) => {
    const { name, salary } = req.body;
    await mysqlConnection.query('INSERT INTO employees SET ?',{
        name: name,
        salary: salary
    }, (error, results, fields) => {
        if(!error) {
            res.json({status:'Employeed Saved'});
        } else {
            console.log(error);
        }
    });
});

router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    await mysqlConnection.query('UPDATE employees SET name = ?, salary = ? WHERE id = ?', [name, salary, id], function (error, results, fields) {
        if(!error) {
            res.json({status:'Employeed Updated'});
        } else {
            console.log(error);
        }
    });
});

router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    await mysqlConnection.query('DELETE FROM employees WHERE id = ?',[id], (error, results, fields) => {
        if(!error) {
            res.json({status:'Employeed Deleted'});
        } else {
            console.log(error);
        }
    });
});

module.exports = router;