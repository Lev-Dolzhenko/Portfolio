const aside = document.getElementById('aside');
const navIcon = document.getElementById('navIcon');
const asideIconClose = document.getElementById('asideIconClose');

navIcon.addEventListener('click', function() {
    aside.classList.add('showAside');
    aside.classList.remove('hideAside');
})

asideIconClose.addEventListener('click', function() {
    aside.classList.add('hideAside');
    aside.classList.remove('showAside');
})