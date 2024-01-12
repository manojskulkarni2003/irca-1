import express from 'express';
import cors from 'cors';
const app = express();

import bodyParser from 'body-parser';



app.use(cors());
import mongoose from 'mongoose'
import basicsRoute from './routes/basic.js'
import familyRoute from './routes/family.js'
import pastRoute from './routes/past.js'
import medicalroute from './routes/medical.js'

app.use(bodyParser.json());

const conn = (async () => {
    try {
        const res = await mongoose.connect('mongodb+srv://prajwaa:mutnal@cluster0.cefcnn7.mongodb.net/');
        if (res) console.log("DB connected");
    }
    catch(err)
    {
        console.log(err);
    }
    
});
conn();

app.use(express.json());
app.use("/basic",basicsRoute);
app.use("/family",familyRoute);
app.use("/past",pastRoute);
app.use("/medical",medicalroute);

app.listen(4200,()=>{
    console.log("Server listen at 4200 port");
})

