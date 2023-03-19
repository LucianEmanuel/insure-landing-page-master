'use strict';
const hamburger = document.querySelectorAll('.hamburger');
const mobileMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
hamburger.forEach(icon => {
  icon.addEventListener('click', e => {
    if (e.currentTarget.classList.contains('open-menu')) {
      e.currentTarget.classList.add('hidden');
      e.currentTarget.nextElementSibling.classList.remove('hidden');
      mobileMenu.style.display = 'block';
      body.classList.add('overflow');
    } else if (e.currentTarget.classList.contains('close-menu')) {
      e.currentTarget.classList.add('hidden');
      e.currentTarget.previousElementSibling.classList.remove('hidden');
      mobileMenu.style.display = 'none';
      body.classList.remove('overflow');
    }
  });
});
