const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const connectDB = require('./conectionDB');


const serv = express();
const port = process.env.PORT || 3001;

serv.use(cors());
serv.use(bodyParser.json());

// const getTodo = require('./routes/getTodo')
const newTodo = require('./Route/newTodo')
// const delTodo = require('./routes/getTodo')
// const updTodo = require('./routes/getTodo')
// const sortTodo = require('./routes/getTodo')

// serv.use('/api', getTodo)
serv.use('/API', newTodo)
// serv.use('/api', delTodo)
// serv.use('/api', updTodo)
// serv.use('/api', sortTodo)

serv.listen(port, ()=>{
    console.log("connected");
});


mongoose.connect(connectDB.todos, { useNewUrlParser: true, useUnifiedTopology: true });

//mongoose.set('useFindAndModify', false);

mongoose.connection.on('connected', () => {
    console.log("sucsses");
});

mongoose.connection.on('error', (err) => {
    console.log("not sucsses" + err);
});