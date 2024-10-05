const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Hero section button click event
const heroButton = document.querySelector('.hero button');

heroButton.addEventListener('click', () => {
  alert('Get Started button clicked!');
  // Replace alert with your desired functionality
});

// Specialization cards hover effects
const specializationCards = document.querySelectorAll('.specialization-cards .card');

specializationCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});

// Job/internship cards hover effects
const jobCards = document.querySelectorAll('.job-cards .card');

jobCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});

// Mentoring cards hover effects
const mentorCards = document.querySelectorAll('.mentor-cards .card');

mentorCards.forEach((card) => {
  card.addEventListener('mouseover', () => {
    card.classList.add('hover');
  });
  card.addEventListener('mouseout', () => {
    card.classList.remove('hover');
  });
});

// Smooth scrolling to sections
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('href');
    const section = document.querySelector(target);
    section.scrollIntoView({ behavior: 'smooth' });
  });
});
