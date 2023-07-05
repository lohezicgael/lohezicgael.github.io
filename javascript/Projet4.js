var btnpopup4 = document.getElementById('btnpopup4');
var overlay4 = document.getElementById('overlay4');
var btnclose4 = document.getElementById('btnclose4');

btnpopup4.addEventListener('click',openModal4);
btnclose4.addEventListener('click',closePopup4);

function openModal4(){
    overlay4.style.display = 'block';
}

function closePopup4(){
    overlay4.style.display = 'none';
}

