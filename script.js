// script.js

// Get a reference to the header element
const header = document.querySelector('.header01');

// Function to handle scroll events
function handleScroll() {
    // Calculate the position of the background image based on scroll
    const scrollPosition = window.scrollY;
    const parallaxFactor = 0.5; // Adjust this value for desired effect

    // Apply the parallax effect
    header.style.backgroundPositionY = `-${scrollPosition * parallaxFactor}px`;
}

// Attach the scroll event listener
window.addEventListener('scroll', handleScroll);


// Get references to both title elements
const titleElement01 = document.querySelector('.title01 p');
const titleElement02 = document.querySelector('.title02 p');

// Separate variables for movement direction of each title
let isMovingRight01 = true;
let isMovingRight02 = true;

// Add mouseover event listener for title01
titleElement01.addEventListener('mouseover', () => {
  if (isMovingRight01) {
    titleElement01.style.transform = 'translateX(100px)'; // Move right 100px
  } else {
    titleElement01.style.transform = 'translateX(-100px)'; // Move left 100px
  }
  isMovingRight01 = !isMovingRight01;
});

// Add mouseout event listener for title01 (reset to center)
titleElement01.addEventListener('mouseout', () => {
  titleElement01.style.transform = 'translateX(0)';
});

// Add mouseover event listener for title02
titleElement02.addEventListener('mouseover', () => {
  if (isMovingRight02) {
    titleElement02.style.transform = 'translateX(100px)'; // Move right 100px
  } else {
    titleElement02.style.transform = 'translateX(-100px)'; // Move left 100px
  }
  isMovingRight02 = !isMovingRight02;
});

// Add mouseout event listener for title02 (reset to center)
titleElement02.addEventListener('mouseout', () => {
  titleElement02.style.transform = 'translateX(0)';
});

// This Js completed

