const slides = document.querySelectorAll('.slide');

slides.forEach((n) => {
  n.addEventListener('click', () => {
    clearClass();
    n.classList.add('active');
  });
});

function clearClass() {
  slides.forEach((n) => {
    n.classList.remove('active');
  });
}
