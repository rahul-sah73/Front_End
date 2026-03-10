// Input animation
const input = document.querySelector('input');
input.addEventListener('focus', () => {
  input.style.transform = 'scale(1.05)';
});
input.addEventListener('blur', () => {
  input.style.transform = 'scale(1)';
});

// Logo fade-in on load
window.addEventListener('load', () => {
  const logo = document.querySelector('.logo img');
  logo.style.opacity = 0;
  logo.style.transition = 'opacity 1.5s ease';
  setTimeout(() => {
    logo.style.opacity = 1;
  }, 300);
});
