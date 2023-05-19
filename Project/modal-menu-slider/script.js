const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

//Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});

//Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

//Hide-modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

//Hide modal on outside click
window.addEventListener('click', (e) =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
