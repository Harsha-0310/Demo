import express, { Router } from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';

import Routes from './routes/route.js';
import {v4 as uuid} from 'uuid'
import bodyParser from 'body-parser';
import cors from 'cors'


const app=express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json({extend:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Routes)
const PORT=8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);
app.listen(PORT,()=>console.log(`Server is Running Successfully on port ${PORT}`));

DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback'
paytmParams['EMAIL'] = '2002sriharsha@gmail.com'
paytmParams['MOBILE_NO'] = '12456789'