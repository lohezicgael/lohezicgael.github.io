var btnpopup5 = document.getElementById('btnpopup5');
var overlay5 = document.getElementById('overlay5');
var btnclose5 = document.getElementById('btnclose5');

btnpopup5.addEventListener('click',openModal5);
btnclose5.addEventListener('click',closePopup5);

function openModal5(){
    overlay5.style.display = 'block';
}

function closePopup5(){
    overlay5.style.display = 'none';
}

