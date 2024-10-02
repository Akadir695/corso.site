// Add custom JavaScript here

const nav = document.querySelector('.navbar');

const scrollFunc = () => {
  if (window.scrollY > 50) {
    nav.classList.add('bg-dark');
  } else {
    nav.classList.remove('bg-dark');
  }
}

// Attach the scroll event to the window
window.addEventListener('scroll', scrollFunc);
