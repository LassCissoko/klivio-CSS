const  sidebarMenu = document.querySelector('.sidebar');
const  barToggle   = document.querySelector('.fa-bars');

barToggle.addEventListener('click', () => {
    sidebarMenu.classList.toggle('active');
})