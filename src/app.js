const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const connectDB = require('./db/conn');
const userRoutes = require('./routes/userRoutes'); // Import user routes
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config(); 

// Initialize the Express application
const app = express();

// Connect to the database
connectDB();

// Middleware to handle incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, '../public')));

// Set up Handlebars as the template engine
app.engine('hbs', exphbs.engine({
    extname: 'hbs', 
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, "..", 'templates', 'layouts'),
    partialsDir: path.join(__dirname, "..", 'templates', 'partial') // Fixed 'partials' directory
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, '..', 'templates', 'views'));

// Use user routes for registration and login
app.use('/', userRoutes); // No '/users' prefix, use directly

// Other static routes
app.get('/software', (req, res) => {
    res.render('software', { title: 'Software Specialization' });
});

app.get('/hardware', (req, res) => {
    res.render('hardware', { title: 'Hardware Specialization' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Us' });
});

app.get('/specialization', (req, res) => {
    res.render('specializations', { title: 'Specializations' });
});

app.get('/jobs_internship', (req, res) => {
    res.render('jobs_internship', { title: 'Jobs & Internships' });
});

app.get('/mentoring', (req, res) => {
    res.render('mentoring', { title: 'Mentoring' });
});

// Home page route
app.get('/', (req, res) => {
    res.render('index', { title: 'CareerCraft' });
});

// Start the server and listen on a PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
