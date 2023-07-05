var btnpopup8 = document.getElementById('btnpopup8');
var overlay8 = document.getElementById('overlay8');
var btnclose8 = document.getElementById('btnclose8');

btnpopup8.addEventListener('click',openModal8);
btnclose8.addEventListener('click',closePopup8);

function openModal8(){
    overlay8.style.display = 'block';
}

function closePopup8(){
    overlay8.style.display = 'none';
}

