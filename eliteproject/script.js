// JavaScript for Toggle Menu
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('nav ul li a');

// Toggle the navigation bar on mobile view
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// Close the navigation menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// JavaScript for Scrolling to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for Sign In Button Alert
const signInButton = document.querySelector('.sign-in button');
signInButton.addEventListener('click', () => {
    alert('Sign In functionality will be implemented soon!');
});

// JavaScript for Subscribe Form Alert
const subscribeForm = document.querySelector('.subscribe form');
subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.querySelector('.subscribe input').value;
    if (emailInput) {
        alert(`Thanks for subscribing with: ${emailInput}`);
    } else {
        alert('Please enter a valid email address!');
    }
});

// JavaScript for Social Media Hover Effect (Color Change)
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.color = '#FFD700'; // Change to gold on hover
    });
    icon.addEventListener('mouseout', () => {
        icon.style.color = ''; // Revert to original color
    });
});
console.log("JavaScript file is linked successfully!");
const signin = document.querySelector('.sign-in button');
signInButton.addEventListener('click', () => {
    alert('Sign In button clicked!');
});

//faqs
// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', function () {
        item.classList.toggle('active');
        // Collapse others if needed (optional)
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
      });
    });
  });
alert(test); 


// Function to load HTML content from another file
function loadHTML(file) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      document.getElementById("content").innerHTML = this.responseText;
    }
  };
  xhr.open("GET", file, true);
  xhr.send();
}

// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
                // Close modal when clicking outside of it
                window.onclick = function(event) {
                    if (event.target == document.getElementById('id01')) {
                        document.getElementById('id01').style.display = "none";
                    }
                }
          



