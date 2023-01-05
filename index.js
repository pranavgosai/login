import express from 'express';
import dotenv from 'dotenv';
import cors from "cors";
import bodyParser from 'body-parser';

import connection from './database/db.js';
import Routes from './routes/route.js';

const app = express();
dotenv.config();
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use('/',Routes);



const PORT = 8000;
const usrname = process.envDB_USERNAME;
const password = process.envDB_PASSWORD;
connection(usrname,password);

app.listen(PORT,()=>console.log(`server is running on PORT ${PORT}`));