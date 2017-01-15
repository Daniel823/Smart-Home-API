const express = require('express')
const chalk = require('chalk');
const athenticate = require('./middleware/authenticator');
const validate = require('./middleware/validator');
const app = express()

app.use(athenticate);
app.use(validate);

// updates the state of the item using a chat bots
app.post('/text-processor', function(req, res) {

    res.status(202).send(req.body);
})

//updates the state of the item using amazon alexa
app.post('/voice-processor', function(req, res) {
    res.status(202).send(req.body);
})

app.post('/window-state', function(req, res) {
    console.dir(req.body);
    res.status(201).send('State Created!');
})

app.listen(3000, function() {
    console.info(chalk.magenta('---------------------------------------'));
    console.log(chalk.cyan(' SmartHome API listening on port: 3000'));
    console.info(chalk.magenta('---------------------------------------'));

})
