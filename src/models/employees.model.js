const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'company'
});

mysqlConnection.connect(function(err) {
    if(err) {
        console.log(err);
        return;
    } else {
        console.log('DB is Connected');
    }
});

class employeesModel {
    getEmployees () {
        return new Promise ((resolve, reject) => {
            mysqlConnection.query('SELECT * FROM employees', (error, results, fields) => {
                if(!error) resolve(results);
                reject(error);
            });
        });
    }
    getEmployeed (id) {
        return new Promise ((resolve, reject) => {
            mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (error, results, fields) => {
                if(!error) resolve(results);
                reject(error);
            });
        });
    }
    addEmployeed (name, salary) {
        return new Promise ((resolve, reject) => {
            mysqlConnection.query('INSERT INTO employees SET ?',{
                name: name,
                salary: salary
            },  (error, results, fields) => {
                    if(!error) resolve(results);
                    reject(error);
            });
        });
    }
    updateEmployeed (id,name,salary) {
        return new Promise ((resolve, reject) => {
            mysqlConnection.query('UPDATE employees SET name = ?, salary = ? WHERE id = ?', [name, salary, id], function (error, results, fields) {
                if(!error) resolve(results);
                 reject(error);      
            });
        });
    }
    deleteEmployeed (id) {
        return new Promise ((resolve, reject) => {
            mysqlConnection.query('DELETE FROM employees WHERE id = ?',[id], (error, results, fields) => {
                if(!error) resolve(results);
                reject(error)
            });
        });
    }
}

module.exports = new employeesModel();
