const express = require('express');
const { connection } = require('./db');

var cors = require('cors');
const { userRouter } = require('./routes/user.routes');

require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users' , userRouter);

app.listen(8080, async()=>{
    try {
        await connection;
        console.log(`port is runnig at 8080`);
        console.log("connected to db");
    } catch (error) {
        console.log(error.message);
        console.log("Something went to wrong");
    }
})
