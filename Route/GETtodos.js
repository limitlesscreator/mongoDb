const express = require('express');
const router = express.Router();
const connectDB = require('../conectionDB');
const Todos = require('../scheme/todoScheme');

router.get('/gettodos', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    Todos.find({}, (err, todos) => {
        if(err) throw err;
        return res.send(todos)
    });
});

module.exports = router;