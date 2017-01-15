const express = require('express')
const chalk = require('chalk');
const athenticate = require('./middleware/authenticator');
const validate = require('./middleware/validator');
const chatBot = require('./modules/chat-bot');
const validate = require('./modules/data-repository');
const app = express()

app.use(athenticate);
app.use(validate);

// updates the state of the item using a chat bots
app.post('/text-processor', function(req, res) {
    var responce  = chatBot.getResponce();
    //Get state of the window
    //save data
    //execute requested action (open/close)

    res.status(201).send("Request has been saved and processed");
})

//updates the state of the item using amazon alexa
app.post('/voice-processor', function(req, res) {
    //Get state of the window
    //save data
    //execute requested action (open/close)

    res.status(201).send("Request has been saved and processed");
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
