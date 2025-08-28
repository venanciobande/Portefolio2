const menu = document.querySelector('.navegacao');
const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', () => {
  menu.classList.toggle('activo');
});
