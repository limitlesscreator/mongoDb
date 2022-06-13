const express = require('express');
const router = express.Router();
const connectDB = require('../conectionDB');
const Todos = require('../scheme/todoScheme');


router.post( '/newtodo', (req, res) => {
    let newTodo = new Todos({
        title: req.body.title,
        starred: req.body.starred,
        done: req.body.done,
        editMode: req.body.editMode,
        date: req.body.date
    });

    try {
        newTodo.save();
        res.json(newTodo);

    }
    catch (err) {
        res.json({success: false, msg: "not add"});
    }
});


module.exports = router;