const express = require('express');
const router = express.Router();
const User = require('../model/user');

// GET Register Route (to render the registration form)
router.get('/registration', (req, res) => {
    res.render('registration');
});

// GET Login Route (to render the login form)
router.get('/login', (req, res) => {
    res.render('login');
});

// POST Register Route (to handle registration logic)
router.post('/registration', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ msg: 'User registered successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// POST Login Route (to handle login logic)
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        res.status(200).json({ msg: 'Login successful' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
