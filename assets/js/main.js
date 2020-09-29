const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.nav-mobile')
hamburger.addEventListener('click', () => {
      header.classList.toggle('toggle');
})

