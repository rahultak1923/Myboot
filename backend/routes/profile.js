const express = require('express');
// const User = require('../models/User')
const Profile = require('../models/Profile')
const router = express.Router();
const {body, validationResult} = require('express-validator');

 

// Create a Profileusing: POST "/api/profile/profileuser". No login required
router.post('/profileuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('phone', 'valid phone number ').isLength({ min: 10 }),
    body('website','valid website').isLength({ min: 3 }),
    body('instragram','valid instragram').isLength({ min: 3 }),
  ], async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Check whether the user with this email exists already
    try {
      let profile = await Profile.findOne({ email: req.body.email });
      if (profile) {
        return res.status(400).json({ error: "Sorry a user with this email already exists" })
      }
  
      // Create a new user
      profile = await Profile.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        website: req.body.website,
        instragram: req.body.instragram,
  
      })
      res.json(profile)
  
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured");
    }
  })
  
  
  module.exports = router