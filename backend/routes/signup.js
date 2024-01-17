import express from 'express';
import bcrypt from 'bcrypt';
import User from '../model/Login.js'
// const bcrypt = require('bcrypt');
// const User = require('./models/User'); // Adjust the path based on your file structure

const router = express.Router();

// Signup Route
router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  console.log("req",req.body)

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    // Send a success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
