const menuBarButton = document.getElementById('menuBarButton');
const menuBarList = document.querySelector('.menuBarList');
const logo = document.querySelector('.logo');
const logoP = logo.querySelector('p');
const html = document.querySelector('html');
var isActive = false;

menuBarButton.addEventListener('click', () => {
    menuBarList.classList.toggle('active');
    if (isActive) {
        menuBarButton.style.position = '';
        menuBarButton.style.color = '';
        logo.style.position = '';
        logoP.style.color = 'rgb(224, 18, 18)';
        html.style.overflow = '';
    } else {
        menuBarButton.style.position = 'fixed';
        menuBarButton.style.color = 'white';
        logo.style.position = 'fixed';
        logoP.style.color = '#ffbe33';
        html.style.overflow = 'hidden';
    }
    isActive = !isActive;
});