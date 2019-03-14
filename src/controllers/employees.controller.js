const employeesModel = require('../models/employees.model');

class employeesController {
    getEmployees () {
        return new Promise((resolve,reject) => {
            employeesModel.getEmployees()
            .then((data)=>{
                resolve(data)
            })  
            .catch((e) => { 
                reject(e)
            });
        });
    }
    getEmployeed (id) {
        return new Promise ((resolve, reject) => {
            employeesModel.getEmployeed(id)
            .then((data) => {
                resolve(data)
            })
            .catch((e) => {
                reject(e)
            });
        });
    }
    addEmployeed (name,salary) {
        return new Promise ((resolve, reject) => {
            employeesModel.addEmployeed(name,salary)
            .then((data) => {
                resolve(data)
            })
            .catch((e) => {
                reject(e)
            });
        });
    }
    updateEmployeed (id,name,salary) {
        return new Promise ((resolve, reject) => {
            employeesModel.updateEmployeed(id,name,salary)
            .then((data) => {
                resolve(data)
            })
            .catch((e) => {
                reject(e)
            });
        });
    }
    deleteEmployeed (id) {
        return new Promise ((resolve, reject) => {
            employeesModel.deleteEmployeed(id)
            .then((data) => {
                resolve(data)
            })
            .catch((e) => {
                reject(e)
            });
        });
    }
}

module.exports = new employeesController();