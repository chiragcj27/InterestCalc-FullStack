const express = require('express');
const app = express();
const port = 3000

app.get("/calculate/simple-interest", function(req,res) {
    const rate = parseFloat(req.query.rate);
    const amount = parseFloat(req.query.amount);
    const time = parseInt(req.query.time);

    const total = amount * (1 + (rate/100)*time);
    const interest = total - amount;

    res.send({
        total: total,
        interest: interest
    })


})

app.listen(port);

