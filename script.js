const headerNav = document.getElementById('header');
const burgerIcon = document.getElementById('burger-icon');
const burgerMenu =  document.getElementById('burger-menu');

burgerIcon.addEventListener('click', function(){
    burgerMenu.classList.toggle('hidden');
    burgerIcon.classList.toggle('active');
})