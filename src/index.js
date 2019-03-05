const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routes
app.use(require('./routes/employees'));

//Starting the Server
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});
