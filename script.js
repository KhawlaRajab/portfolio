'use strict';
const navbar = document.querySelector('.bar');
const list = document.querySelector('nav ul');
const skills_link= document.querySelector('#skills');
const edu = document.querySelector('#edu');
const exp = document.querySelector('#exp');
const skills = document.querySelector('.skills');
const education = document.querySelector('.education');
const experience = document.querySelector('.experience');

navbar.addEventListener('click', function () {
    navbar.classList.toggle('active');
    list.classList.toggle('active');
});

edu.addEventListener('click', function () {
    console.log(1);
    education.style.display = 'block';
    skills.style.display = 'none';
    experience.style.display = 'none';
});

skills_link.addEventListener('click', function () {
    education.style.display = 'none';
    skills.style.display ='block';
    experience.style.display = 'none';
});

exp.addEventListener('click', function () {
    education.style.display = 'none';
    skills.style.display = 'none';
    experience.style.display = 'block';
});