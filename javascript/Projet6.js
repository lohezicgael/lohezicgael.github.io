var btnpopup6 = document.getElementById('btnpopup6');
var overlay6 = document.getElementById('overlay6');
var btnclose6 = document.getElementById('btnclose6');

btnpopup6.addEventListener('click',openModal6);
btnclose6.addEventListener('click',closePopup6);

function openModal6(){
    overlay6.style.display = 'block';
}

function closePopup6(){
    overlay6.style.display = 'none';
}

