const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes
app.use(require('./routes/employees'));

//Starting the Server
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});
