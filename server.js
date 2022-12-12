const express = require('express');
const app = express();
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const {readdirSync} = require('fs');

//middlewares
app.use(helmet());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(cors());

//db connection 
mongoose.set('strictQuery', false);
mongoose
.connect(process.env.DATABASE)
.then(()=> console.log('Database connected'))
.catch((err)=>console.log('Database error => ', err));

// route middleware
readdirSync('./routes').map(r => app.use('/api/v1', require(`./routes/${r}`)));

//Server
const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`app runing on port ${port}`);
})