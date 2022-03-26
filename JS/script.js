//déclarer les constantes utiles : la sidebar qui se décale + le burger menu

const toggleButton = document.getElementById('menu-button-container');
const menuBtn = document.getElementById('side-bar');

//déclarer fonction pour faire entrer/sortir la side bar en cliquant sur le burger menu

toggleButton.addEventListener('click', (show) => {
menuBtn.classList.toggle('active');
});

//déclarer fonction pour faire entrer la sidebar si click sur le main content

const content = document.querySelector('.content');

content.addEventListener('click', () => {
    menuBtn.classList.remove('active');
})