const express = require('express')
const chalk = require('chalk');
var app = express()

// updates the state of the item using a chat bots
app.post('/text-processor', function(req, res) {
    res.status(202).send(req.body);
})

//updates the state of the item using amazon alexa
app.post('/voice-processor', function(req, res) {
    res.status(202).send(req.body);
})

app.post('/item-state', function(req, res) {
    res.status(201).send('State Created!');
})

app.listen(3000, function() {
    console.info(chalk.magenta('---------------------------------------'));
    console.log(chalk.cyan(' SmartHome API listening on port: 3000'));
    console.info(chalk.magenta('---------------------------------------'));

})
