import express from 'express';
import cors from 'cors';
const app = express();

import bodyParser from 'body-parser';
import User from './model/Login.js'


app.use(bodyParser.json()); 
app.use(cors());
import mongoose from 'mongoose';
import basicsRoute from './routes/basic.js'
import familyRoute from './routes/family.js'
// import pastRoute from './routes/past.js'
import medicalroute from './routes/medical.js'
// import signup from './routes/signup.js'
import bcrypt from 'bcrypt'

app.use(bodyParser.json());

const conn = (async () => {
    try {
        const res = await mongoose.connect("mongodb+srv://manoj:kulkarni@cluster0.llshroy.mongodb.net/");
        if (res) console.log("DB connected");
        else throw err;
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
// app.use("/past",pastRoute);
app.use("/medical",medicalroute);
// app.use("/signup",signup);


app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    console.log("name",name)
  
    try {
      // Check if the email is already registered
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.status(400).json({ error: 'Email is already registered' });
      }
  
      // Hash the password
    //   const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user
      const newUser = new User({ name, email, password });
      await newUser.save();
  
      // Send a success response
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      // Compare passwords
      const isPasswordValid = password === user.password;
  
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid email or password' });
      }
  
      // Generate JWT token
      // const token = jwt.sign({ userId: user._id }, 'your_secret_key', { expiresIn: '1h' });
  
      // Send the token in the response
      res.status(200).json({ message: 'Successfully login' });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  app.get('/api/getAllFormData', async (req, res) => {
    const { name } = req.query;
  
    try {
      // Fetch basic form data to get the "name" field
      const basicFormData = await FormBasicData.findOne({ name });
  
      if (!basicFormData) {
        return res.status(404).json({ message: 'Basic form data not found' });
      }
  
      // Use the "name" field to fetch data from other forms
      const familyFormData = await FormFamilyData.findOne({ name: basicFormData.name });
      const medicalFormData = await FormMedicalData.findOne({ name: basicFormData.name });
  
      if (!familyFormData || !medicalFormData) {
        return res.status(404).json({ message: 'Form data not found' });
      }
  
      return res.status(200).json({
        basicFormData,
        familyFormData,
        medicalFormData,
      });
    } catch (error) {
      return res.status(500).json({ error: 'An error occurred while fetching form data' });
    }
  });

  app.get('/user/:name', async (req, res) => {
    try {
      const userName = req.params.name;
      const user = await User.findOne({ name: userName });
  
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      res.send(user);
    } catch (error) {
      res.status(500).send('Something went wrong');
    }
  });
  
  


app.listen(5000,()=>{
    console.log("Server listen at 5000 port");
})

