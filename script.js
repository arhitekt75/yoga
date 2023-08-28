const btn =  document.getElementById('btn-show');
const sideMenu = document.getElementById('hamburger');
const cls = document.getElementById('btn-close')

btn.addEventListener('click',ShowMenu);
cls.addEventListener('click', HideMenu);

function ShowMenu(){
    sideMenu.classList.toggle('hs');
    document.body.classList.toggle('stop-scrolling');
}

function HideMenu(){
    sideMenu.classList.toggle('hs');
    document.body.classList.toggle('stop-scrolling');
}